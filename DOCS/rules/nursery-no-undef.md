# nursery/no-undef

Запрещает использование неопределённых переменных.

## Описание

Это правило помогает найти переменные, которые используются, но не объявлены. Использование необъявленных переменных может привести к ошибкам ReferenceError во время выполнения.

## Проблемные примеры

```javascript
var a = someFunction();
b = 10;

function myFunction() {
    return undefinedVariable;
}

// Использование переменной до объявления в другой области видимости
console.log(x);
function test() {
    var x = 1;
}

// Опечатка в имени переменной
var message = "Hello";
console.log(mesage); // должно быть message
```

## Правильные примеры

```javascript
var someFunction = require('./someFunction');
var a = someFunction();
var b = 10;

function myFunction() {
    var definedVariable = 'value';
    return definedVariable;
}

// Правильное использование глобальных переменных
/* global console, require */
console.log('Hello world');

// Правильное объявление переменных
var message = "Hello";
console.log(message);
```

## Конфигурация

Правило можно настроить для работы с глобальными переменными:

```json
{
    "rules": {
        "no-undef": "error"
    },
    "globals": {
        "MyGlobal": "readonly",
        "MyWritableGlobal": "writable"
    }
}
```