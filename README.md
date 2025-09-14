# @expa/oxlint-config

Конфигурация oxlint для проектов EXPA. Этот пакет предоставляет стандартизированные правила линтинга для JavaScript и TypeScript проектов.

## Установка

```bash
npm install --save-dev @expa/oxlint-config oxlint
```

## Использование

### В package.json

Добавьте скрипт в ваш `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint --config @expa/oxlint-config"
  }
}
```

### Прямое использование

```bash
npx oxlint --config @expa/oxlint-config src/
```

### В oxlint.json

Создайте файл `oxlint.json` в корне вашего проекта:

```json
{
  "extends": "@expa/oxlint-config"
}
```

## Конфигурация

Данная конфигурация включает в себя:

- **Correctness**: Правила для выявления ошибок и потенциальных проблем
- **Suspicious**: Правила для выявления подозрительного кода
- **Style**: Правила стиля кода
- **Complexity**: Правила для контроля сложности кода
- **Performance**: Правила для оптимизации производительности

### Основные правила

- Строгие правила для предотвращения ошибок
- Предупреждения для потенциальных проблем
- Поддержка современного JavaScript (ES2022)
- Оптимизация для браузерной и Node.js среды

## Разработка

### Установка зависимостей

```bash
npm install
```

### Тестирование

```bash
npm test
```

### Публикация

```bash
npm publish
```

## Лицензия

MIT

## Поддержка

Если у вас есть вопросы или предложения, создайте issue в [репозитории проекта](https://github.com/expa/oxlint-config/issues).
