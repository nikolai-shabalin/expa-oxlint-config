# @expa/oxlint-config

Конфигурация oxlint для проектов. Этот пакет предоставляет стандартизированные правила линтинга для JavaScript и TypeScript проектов с модульной структурой.


## Установка

```bash
npm install --save-dev @expa/oxlint-config oxlint
```

## Использование

### Вариант 1: С extends (рекомендуется)

Используйте основной конфиг с модульной структурой:

```bash
npx oxlint --config @expa/oxlint-config src/
```

### Вариант 2: Плоская структура

Для проектов, где oxlint не поддерживает `extends`, используйте конвертер:

```bash
# Создать плоскую версию конфига
node convert-to-flat.js

# Использовать плоскую версию
npx oxlint --config .oxlintrc.flat.json src/
```

### В package.json

```json
{
  "scripts": {
    "lint": "oxlint --config @expa/oxlint-config",
    "lint:flat": "oxlint --config .oxlintrc.flat.json",
    "convert": "node convert-to-flat.js",
    "convert:replace": "node convert-to-flat.js --replace"
  }
}
```

## Структура проекта

```
├── .oxlintrc.json          # Основной конфиг с extends
├── configs/                # Группированные правила
│   ├── correctness.json    # Правила корректности (error)
│   ├── suspicious.json     # Подозрительный код (warn)
│   ├── style.json          # Стиль кода (warn)
│   ├── perf.json           # Производительность (warn)
│   ├── pedantic.json       # Педантичные правила (warn)
│   ├── restriction.json    # Ограничения (warn)
│   └── nursery.json        # Экспериментальные правила (warn)
├── convert-to-flat.js      # Конвертер в плоскую структуру
└── test-functions.js       # Тестовый файл для проверки
```
4

## Конфигурация

### Группы правил

- **Correctness** (error): 219 правил для выявления ошибок и критических проблем
- **Suspicious** (warn): 42 правила для подозрительного кода
- **Style** (warn): 156 правил стиля кода
- **Performance** (warn): 11 правил оптимизации производительности
- **Pedantic** (warn): 95 педантичных правил
- **Restriction** (warn): 77 правил ограничений
- **Nursery** (warn): 8 экспериментальных правил

**Всего: 608 правил**

### Основные возможности

- ✅ Модульная структура с группировкой правил
- ✅ Конвертер в плоскую структуру для совместимости
- ✅ Строгие правила для предотвращения ошибок
- ✅ Поддержка современного JavaScript (ES2022)
- ✅ Оптимизация для браузерной и Node.js среды
- ✅ React и TypeScript поддержка

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
