const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

class OxlintRulesScraper {
    constructor() {
        this.browser = null;
        this.page = null;
        this.baseUrl = 'https://oxc.rs';
        this.rulesUrl = 'https://oxc.rs/docs/guide/usage/linter/rules';
        this.allRules = [];
        this.scrapedRules = [];
    }

    async init() {
        console.log('Запуск браузера...');
        this.browser = await chromium.launch({ 
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        this.page = await this.browser.newPage();
        
        // Устанавливаем User-Agent чтобы избежать блокировки
        await this.page.setExtraHTTPHeaders({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
    }

    async scrapeRulesList() {
        console.log('Загружаем страницу с правилами...');
        await this.page.goto(this.rulesUrl, { waitUntil: 'networkidle' });

        console.log('Парсим список правил...');
        
        // Ждем загрузки таблиц с правилами
        await this.page.waitForSelector('table', { timeout: 30000 });

        // Извлекаем все правила из всех таблиц
        const rules = await this.page.evaluate(() => {
            const tables = document.querySelectorAll('table');
            const allRules = [];
            
            tables.forEach((table, tableIndex) => {
                // Находим заголовок секции
                let sectionHeader = table.previousElementSibling;
                while (sectionHeader && !sectionHeader.matches('h2')) {
                    sectionHeader = sectionHeader.previousElementSibling;
                }
                
                const sectionName = sectionHeader ? 
                    sectionHeader.textContent.trim().replace(/\s*\(\d+\):\s*$/, '') : 
                    `Section ${tableIndex + 1}`;
                
                // Получаем описание секции
                let sectionDescription = '';
                let nextElement = sectionHeader ? sectionHeader.nextElementSibling : null;
                if (nextElement && nextElement.tagName === 'P') {
                    sectionDescription = nextElement.textContent.trim();
                }

                const rows = table.querySelectorAll('tbody tr');
                
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 3) {
                        const nameCell = cells[0];
                        const link = nameCell.querySelector('a');
                        
                        if (link) {
                            const ruleName = link.textContent.trim();
                            const ruleUrl = link.getAttribute('href');
                            const source = cells[1].textContent.trim();
                            const isDefault = cells[2].textContent.trim() === '✅';
                            const fixable = cells.length > 3 ? cells[3].textContent.trim() : '';

                            allRules.push({
                                name: ruleName,
                                url: ruleUrl,
                                source: source,
                                isDefault: isDefault,
                                fixable: fixable,
                                section: sectionName,
                                sectionDescription: sectionDescription
                            });
                        }
                    }
                });
            });
            
            return allRules;
        });

        this.allRules = rules;
        console.log(`Найдено ${rules.length} правил`);
        
        // Группируем правила по секциям для отчета
        const rulesBySection = {};
        rules.forEach(rule => {
            if (!rulesBySection[rule.section]) {
                rulesBySection[rule.section] = [];
            }
            rulesBySection[rule.section].push(rule);
        });

        console.log('\nПравила по секциям:');
        Object.entries(rulesBySection).forEach(([section, sectionRules]) => {
            console.log(`- ${section}: ${sectionRules.length} правил`);
        });

        return rules;
    }

    async scrapeRuleDetails(rule) {
        try {
            const fullUrl = this.baseUrl + rule.url;
            console.log(`Парсим правило: ${rule.name} (${fullUrl})`);
            
            await this.page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 });
            
            // Ждем загрузки контента
            await this.page.waitForSelector('main', { timeout: 10000 });

            const ruleDetails = await this.page.evaluate(() => {
                const main = document.querySelector('main');
                if (!main) return null;

                // Извлекаем заголовок
                const title = document.querySelector('h1')?.textContent?.trim() || '';
                
                // Извлекаем описание (первый параграф после заголовка)
                const description = document.querySelector('main p')?.textContent?.trim() || '';
                
                // Извлекаем все содержимое страницы
                const content = main.innerHTML;
                
                // Извлекаем текстовое содержимое для поиска
                const textContent = main.textContent || main.innerText || '';

                // Пытаемся найти примеры кода
                const codeBlocks = Array.from(document.querySelectorAll('pre code')).map(block => ({
                    language: block.className.replace('language-', '') || 'javascript',
                    code: block.textContent.trim()
                }));

                // Пытаемся найти информацию о конфигурации
                const configInfo = textContent.match(/Configuration[\s\S]*?(?=\n\n|\n#|$)/i)?.[0] || '';

                return {
                    title,
                    description,
                    content,
                    textContent,
                    codeBlocks,
                    configInfo,
                    url: window.location.href
                };
            });

            if (ruleDetails) {
                return {
                    ...rule,
                    details: ruleDetails,
                    scrapedAt: new Date().toISOString()
                };
            }

            return null;
        } catch (error) {
            console.error(`Ошибка при парсинге правила ${rule.name}:`, error.message);
            return {
                ...rule,
                details: null,
                error: error.message,
                scrapedAt: new Date().toISOString()
            };
        }
    }

    async scrapeAllRules() {
        console.log('\nНачинаем парсинг детальной информации о правилах...');
        
        for (let i = 0; i < this.allRules.length; i++) {
            const rule = this.allRules[i];
            console.log(`Обрабатываем ${i + 1}/${this.allRules.length}: ${rule.name}`);
            
            const scrapedRule = await this.scrapeRuleDetails(rule);
            if (scrapedRule) {
                this.scrapedRules.push(scrapedRule);
            }

            // Добавляем небольшую задержку между запросами
            if (i < this.allRules.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }

        console.log(`\nПарсинг завершен. Обработано ${this.scrapedRules.length} правил`);
    }

    async saveResults() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        
        // Создаем директорию для результатов
        const resultsDir = path.join(__dirname, 'oxlint-rules-data');
        await fs.mkdir(resultsDir, { recursive: true });

        // Сохраняем полный список правил с деталями
        const fullDataPath = path.join(resultsDir, `oxlint-rules-full-${timestamp}.json`);
        await fs.writeFile(fullDataPath, JSON.stringify(this.scrapedRules, null, 2), 'utf8');
        console.log(`Полные данные сохранены в: ${fullDataPath}`);

        // Сохраняем краткий список правил
        const summaryData = this.scrapedRules.map(rule => ({
            name: rule.name,
            source: rule.source,
            section: rule.section,
            isDefault: rule.isDefault,
            fixable: rule.fixable,
            url: rule.url,
            title: rule.details?.title || '',
            description: rule.details?.description || '',
            hasError: !!rule.error
        }));

        const summaryPath = path.join(resultsDir, `oxlint-rules-summary-${timestamp}.json`);
        await fs.writeFile(summaryPath, JSON.stringify(summaryData, null, 2), 'utf8');
        console.log(`Краткие данные сохранены в: ${summaryPath}`);

        // Создаем отчет по секциям
        const sectionReport = {};
        this.scrapedRules.forEach(rule => {
            if (!sectionReport[rule.section]) {
                sectionReport[rule.section] = {
                    description: rule.sectionDescription,
                    rules: []
                };
            }
            sectionReport[rule.section].rules.push({
                name: rule.name,
                source: rule.source,
                isDefault: rule.isDefault,
                fixable: rule.fixable,
                hasError: !!rule.error
            });
        });

        const reportPath = path.join(resultsDir, `oxlint-sections-report-${timestamp}.json`);
        await fs.writeFile(reportPath, JSON.stringify(sectionReport, null, 2), 'utf8');
        console.log(`Отчет по секциям сохранен в: ${reportPath}`);

        // Создаем текстовый отчет
        let textReport = `Отчет о парсинге правил Oxlint\n`;
        textReport += `Дата: ${new Date().toLocaleString('ru-RU')}\n`;
        textReport += `Всего правил: ${this.scrapedRules.length}\n\n`;

        Object.entries(sectionReport).forEach(([sectionName, sectionData]) => {
            textReport += `${sectionName} (${sectionData.rules.length} правил)\n`;
            textReport += `${sectionData.description}\n\n`;
            
            sectionData.rules.forEach(rule => {
                textReport += `  - ${rule.name} (${rule.source})`;
                if (rule.isDefault) textReport += ' [По умолчанию]';
                if (rule.fixable) textReport += ` [${rule.fixable}]`;
                if (rule.hasError) textReport += ' [ОШИБКА]';
                textReport += '\n';
            });
            textReport += '\n';
        });

        const textReportPath = path.join(resultsDir, `oxlint-report-${timestamp}.txt`);
        await fs.writeFile(textReportPath, textReport, 'utf8');
        console.log(`Текстовый отчет сохранен в: ${textReportPath}`);

        return {
            fullDataPath,
            summaryPath,
            reportPath,
            textReportPath,
            totalRules: this.scrapedRules.length,
            successfulRules: this.scrapedRules.filter(r => !r.error).length,
            errorRules: this.scrapedRules.filter(r => r.error).length
        };
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

async function main() {
    const scraper = new OxlintRulesScraper();
    
    try {
        await scraper.init();
        await scraper.scrapeRulesList();
        await scraper.scrapeAllRules();
        const results = await scraper.saveResults();
        
        console.log('\n=== РЕЗУЛЬТАТЫ ПАРСИНГА ===');
        console.log(`Всего правил: ${results.totalRules}`);
        console.log(`Успешно обработано: ${results.successfulRules}`);
        console.log(`Ошибок: ${results.errorRules}`);
        console.log('\nФайлы результатов:');
        console.log(`- Полные данные: ${results.fullDataPath}`);
        console.log(`- Краткие данные: ${results.summaryPath}`);
        console.log(`- Отчет по секциям: ${results.reportPath}`);
        console.log(`- Текстовый отчет: ${results.textReportPath}`);
        
    } catch (error) {
        console.error('Ошибка при выполнении парсинга:', error);
    } finally {
        await scraper.close();
    }
}

if (require.main === module) {
    main();
}

module.exports = OxlintRulesScraper;