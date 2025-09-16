#!/usr/bin/env node
/*
  Генератор документации для правил Oxlint из папки configs.
  Создает:
  - DOCS/README.MD — таблица со списком правил и ссылками
  - DOCS/rules/<category>-<rule>.md — файлы правил по шаблону
*/

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const WORKSPACE_ROOT = '/workspace';
const CONFIGS_DIR = path.join(WORKSPACE_ROOT, 'configs');
const DOCS_DIR = path.join(WORKSPACE_ROOT, 'DOCS');
const RULES_DIR = path.join(DOCS_DIR, 'rules');

/**
 * Читает JSON конфиг и возвращает список правил.
 * @param {string} filePath
 * @returns {{category:string, rules:Array<{name:string, level:string}>}}
 */
async function readConfigRules(filePath) {
  const raw = await fsp.readFile(filePath, 'utf8');
  const json = JSON.parse(raw);
  const rules = json.rules || {};
  const entries = Object.entries(rules).map(([name, level]) => ({ name, level: String(level) }));
  const category = path.basename(filePath, path.extname(filePath));
  return { category, rules: entries };
}

/**
 * Создает директорию, если ее нет.
 * @param {string} dir
 */
async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

/**
 * Генерирует содержимое файла правила.
 * @param {string} category
 * @param {string} rule
 * @param {string} level
 */
function generateRuleMarkdown(category, rule, level) {
  const displayTitle = `${category}/${rule}`;
  const docLink = 'https://oxc.rs/docs/guide/usage/linter/rules';
  return [
    `# ${displayTitle}`,
    `Короткое описание: см. официальную документацию Oxlint — ${docLink}.`,
    '',
    `Уровень в конфигурации: ${level}.`,
    '',
    '## Пример хорошего использования',
    '```js',
    '// Пример корректного использования; подробности см. документацию по правилу.',
    '```',
    '',
    '## Пример плохого использования',
    '```js',
    '// Пример некорректного использования; подробности см. документацию по правилу.',
    '```',
    ''
  ].join('\n');
}

/**
 * Генерирует таблицу в README.MD
 * @param {Array<{category:string, name:string, level:string, file:string}>} allRules
 */
function generateReadme(allRules) {
  const header = [
    '# Справочник правил Oxlint',
    '',
    'Ниже приведен список правил, собранный из конфигураций в папке `configs`. Для описания каждого правила откройте соответствующий файл из папки `DOCS/rules`.',
    '',
    '| Правило | Описание |',
    '|---|---|'
  ];

  const rows = allRules.map(r => {
    const link = `rules/${r.file}`;
    const label = `${r.category}/${r.name}`;
    const desc = 'См. документацию Oxlint';
    return `| [${label}](${link}) | ${desc} |`;
  });

  return header.concat(rows).concat(['']).join('\n');
}

async function main() {
  await ensureDir(DOCS_DIR);
  await ensureDir(RULES_DIR);

  const files = await fsp.readdir(CONFIGS_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json'));

  const result = [];

  for (const jf of jsonFiles) {
    const full = path.join(CONFIGS_DIR, jf);
    const { category, rules } = await readConfigRules(full);
    for (const { name, level } of rules) {
      const fileName = `${category}-${name}.md`;
      const filePath = path.join(RULES_DIR, fileName);
      const content = generateRuleMarkdown(category, name, level);
      await fsp.writeFile(filePath, content, 'utf8');
      result.push({ category, name, level, file: fileName });
    }
  }

  // Сортируем по категории и имени для стабильности
  result.sort((a, b) => a.category === b.category ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category));

  const readme = generateReadme(result);
  await fsp.writeFile(path.join(DOCS_DIR, 'README.MD'), readme, 'utf8');

  // Итоговое сообщение в stdout
  console.log(`Сгенерировано правил: ${result.length}. Файлы записаны в ${RULES_DIR}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

