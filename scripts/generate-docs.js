const fs = require('fs');
const path = require('path');

const repoRoot = __dirname ? path.resolve(__dirname, '..') : process.cwd();
const configsDir = path.join(repoRoot, 'configs');
const docsDir = path.join(repoRoot, 'DOCS');
const rulesDir = path.join(docsDir, 'rules');

fs.mkdirSync(rulesDir, { recursive: true });

const configFiles = fs.readdirSync(configsDir).filter((file) => file.endsWith('.json')).sort();

const tableEntries = [];

for (const configFile of configFiles) {
  const configName = path.basename(configFile, '.json');
  const configPath = path.join(configsDir, configFile);
  const json = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const rules = json.rules ? Object.keys(json.rules).sort((a, b) => a.localeCompare(b)) : [];

  for (const ruleName of rules) {
    const fileName = `${configName}-${ruleName}.md`;
    const docPath = path.join(rulesDir, fileName);
    const heading = `${configName}/${ruleName}`;
    const officialUrl = `https://oxc.rs/docs/guide/usage/linter/rules/${ruleName}`;

    const content = `# ${heading}\n` +
      `Правило \`${ruleName}\` из набора \`${configName}\` помогает предотвращать ошибки и несоответствия стилю, описанные в линтере Oxlint. ` +
      `Полное описание и рекомендации доступны в официальной документации: ${officialUrl}.\n\n` +
      `## ✅ Пример хорошего использования\n` +
      '```js\n' +
      `// Корректный пример доступен в документации: ${officialUrl}\n` +
      '```\n\n' +
      `## ❌ Пример плохого использования\n` +
      '```js\n' +
      `// Пример потенциальной проблемы описан в документации: ${officialUrl}\n` +
      '```\n';

    fs.writeFileSync(docPath, content, 'utf8');

    const link = `./rules/${fileName}`;
    const description = `Правило \`${ruleName}\` из набора \`${configName}\`. Подробности: ${officialUrl}`;

    tableEntries.push({ link, heading, description });
  }
}

const tableHeader = '| Правило | Описание |\n| --- | --- |\n';
const tableRows = tableEntries
  .sort((a, b) => a.heading.localeCompare(b.heading))
  .map(({ link, heading, description }) => `| [${heading}](${link}) | ${description} |`)
  .join('\n');

const readmeContent = '# Правила Oxlint\n\n' +
  'Ниже приведён список правил, подключённых в конфигурациях каталога `configs`. Для каждого правила указана ссылка на отдельный файл с кратким описанием и ссылкой на официальную документацию.\n\n' +
  tableHeader +
  tableRows +
  '\n';

fs.writeFileSync(path.join(docsDir, 'README.md'), readmeContent, 'utf8');
