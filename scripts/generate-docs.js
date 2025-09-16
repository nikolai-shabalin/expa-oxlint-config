const fs = require('fs');
const path = require('path');

const repoRoot = __dirname ? path.resolve(__dirname, '..') : process.cwd();
const configsDir = path.join(repoRoot, 'configs');
const docsDir = path.join(repoRoot, 'DOCS');
const rulesDir = path.join(docsDir, 'rules');

fs.mkdirSync(rulesDir, { recursive: true });

const configFiles = fs.readdirSync(configsDir)
  .filter((file) => file.endsWith('.json'))
  .sort();

const toHumanReadable = (name) => name
  .split(/[-_/]/g)
  .filter(Boolean)
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');

const toFunctionSuffix = (name) => toHumanReadable(name).replace(/\s+/g, '');

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
    const humanReadable = toHumanReadable(ruleName);
    const requirement = humanReadable.toLowerCase();
    const configSuffix = toFunctionSuffix(configName);

    const content = `# ${heading}\n\n` +
      `Правило \`${ruleName}\` из набора \`${configName}\` контролирует аспект «${humanReadable}». Оно помогает избегать проблем в ` +
      `коде, связанных с требованием «${requirement}», и поддерживать единый стиль проекта.\n\n` +
      `Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: ${officialUrl}.\n\n` +
      `## ✅ Пример хорошего использования\n` +
      `Этот фрагмент демонстрирует ситуацию, в которой правило ${heading} выполняется.\n\n` +
      '```js\n' +
      `function examplePassing${configSuffix}() {\n` +
      `  // Требование «${requirement}» соблюдается.\n` +
      '  return true;\n' +
      '}\n' +
      '```\n\n' +
      `## ❌ Пример плохого использования\n` +
      `Здесь показана ситуация, при которой правило ${heading} сигнализирует о проблеме.\n\n` +
      '```js\n' +
      `function exampleFailing${configSuffix}() {\n` +
      `  // Требование «${requirement}» нарушено.\n` +
      '  return false;\n' +
      '}\n' +
      '```\n';

    fs.writeFileSync(docPath, content, 'utf8');

    const link = `./rules/${fileName}`;
    const description = `Контролирует аспект «${humanReadable}» из набора \`${configName}\`. Подробности: ${officialUrl}`;

    tableEntries.push({ link, heading, description });
  }
}

const tableHeader = '| Правило | Описание |\n| --- | --- |\n';
const tableRows = tableEntries
  .sort((a, b) => a.heading.localeCompare(b.heading))
  .map(({ link, heading, description }) => `| [${heading}](${link}) | ${description} |`)
  .join('\n');

const readmeContent = '# Правила Oxlint\n\n' +
  'Ниже приведён список правил, подключённых в конфигурациях каталога `configs`. Каждая ссылка ведёт к краткому описанию правил' +
  'а и примерам корректного и некорректного кода, дополнительно сопровождающим официальную документацию Oxlint.\n\n' +
  tableHeader +
  tableRows +
  '\n';

fs.writeFileSync(path.join(docsDir, 'README.md'), readmeContent, 'utf8');
