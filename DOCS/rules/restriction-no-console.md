# restriction/no-console

Запрещает использование методов объекта console.

## Описание

Методы console предназначены для отладки и не должны оставаться в продакшен коде. Это правило помогает убрать все вызовы console.log, console.warn, console.error и других методов console перед развёртыванием.

## Проблемные примеры

```javascript
console.log("Hello world");
console.warn("This is a warning");
console.error("This is an error");
console.info("This is info");
console.debug("Debug message");

function processData(data) {
    console.log("Processing:", data); // Отладочная информация
    return data.map(item => item * 2);
}

// Даже в условных блоках
if (DEBUG) {
    console.log("Debug mode enabled");
}
```

## Правильные примеры

```javascript
// Используйте логгер для продакшен кода
import logger from './logger';

logger.info("Application started");
logger.warn("This is a warning");
logger.error("This is an error");

function processData(data) {
    logger.debug("Processing:", data);
    return data.map(item => item * 2);
}

// Или условная компиляция
if (process.env.NODE_ENV === 'development') {
    // console разрешён только в режиме разработки
}

// Альтернативы для отладки
function debug(message, data) {
    if (process.env.NODE_ENV === 'development') {
        console.log(message, data);
    }
}
```

## Конфигурация

```json
{
    "rules": {
        "no-console": "error"
    }
}
```

Можно разрешить определённые методы console:

```json
{
    "rules": {
        "no-console": ["error", { 
            "allow": ["warn", "error"] 
        }]
    }
}
```

## Когда отключать

- В среде разработки для отладки
- В скриптах сборки или утилитах командной строки
- В тестах, где console используется для вывода результатов

```javascript
// В тестах
describe('My test', () => {
    it('should work', () => {
        console.log('Test output'); // Может быть полезно
        expect(result).toBe(expected);
    });
});
```