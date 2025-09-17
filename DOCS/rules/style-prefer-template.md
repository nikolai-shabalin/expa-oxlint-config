# prefer-template

Требует использования шаблонных литералов вместо конкатенации строк. Шаблонные литералы более читаемы и менее подвержены ошибкам.

## Проблемные примеры

```javascript
const message = 'Hello, ' + name + '!';

const url = 'https://api.example.com/' + endpoint + '?id=' + id;

const html = '<div class="' + className + '">' + content + '</div>';

const multiline = 'First line\n' + 
                 'Second line\n' + 
                 'Third line';
```

## Корректные примеры

```javascript
const message = `Hello, ${name}!`;

const url = `https://api.example.com/${endpoint}?id=${id}`;

const html = `<div class="${className}">${content}</div>`;

const multiline = `First line
Second line
Third line`;

// Простая конкатенация без переменных остается допустимой
const simple = 'Hello' + ' ' + 'World';
```