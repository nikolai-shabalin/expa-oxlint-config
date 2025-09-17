# style/prefer-template

Предпочитает использование template literals вместо конкатенации строк.

## Описание

Template literals (обратные кавычки) предоставляют более читаемый и удобный способ создания строк с интерполяцией переменных по сравнению с конкатенацией через оператор +.

## Проблемные примеры

```javascript
// Конкатенация строк
var message = "Hello " + name + "!";
var url = "https://api.example.com/users/" + userId + "/posts";
var html = "<div class=\"" + className + "\">" + content + "</div>";

// Сложная конкатенация
var query = "SELECT * FROM users WHERE name = '" + name + "' AND age = " + age;

// Многострочная конкатенация  
var longMessage = "This is a very long message " +
                  "that spans multiple lines " +
                  "and includes " + variable + " interpolation.";
```

## Правильные примеры

```javascript
// Template literals более читаемы
const message = `Hello ${name}!`;
const url = `https://api.example.com/users/${userId}/posts`;
const html = `<div class="${className}">${content}</div>`;

// Легче читать сложные выражения
const query = `SELECT * FROM users WHERE name = '${name}' AND age = ${age}`;

// Многострочные строки без конкатенации
const longMessage = `This is a very long message 
                     that spans multiple lines 
                     and includes ${variable} interpolation.`;

// Вложенные выражения
const result = `Result: ${isSuccess ? 'Success' : 'Failed'}`;

// Вычисления внутри шаблона
const total = `Total: ${price * quantity} USD`;
```

## Исключения

Простая конкатенация без переменных может оставаться как есть:

```javascript
// Разрешено - нет интерполяции
const message = "Hello" + "World";
const path = basePath + "/api";

// Но лучше использовать template literal
const message = `HelloWorld`;
const path = `${basePath}/api`;
```

## Преимущества template literals

1. **Читаемость**: Легче понять структуру строки
2. **Многострочность**: Поддержка переносов строк без `\n`
3. **Интерполяция**: Выражения внутри `${}`
4. **Производительность**: Часто быстрее конкатенации

```javascript
// Многострочный HTML
const template = `
    <article>
        <h1>${title}</h1>
        <p>${description}</p>
        <footer>By ${author} on ${date}</footer>
    </article>
`;

// Сложная логика
const status = `Status: ${
    isLoading ? 'Loading...' : 
    hasError ? 'Error occurred' : 
    'Ready'
}`;
```

## Конфигурация

```json
{
    "rules": {
        "prefer-template": "error"
    }
}
```