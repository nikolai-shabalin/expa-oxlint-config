# no-undef

Запрещает использование неопределенных переменных. Это правило помогает выявить опечатки в именах переменных и предотвратить ReferenceError во время выполнения.

## Проблемные примеры

```javascript
// typo в имени переменной
var userName = 'John';
console.log(userNme); // ReferenceError

// использование необъявленной переменной
function calculate() {
  return x * 2; // x не объявлен
}

// использование необъявленной глобальной переменной
if (DEBUG) { // DEBUG не объявлен
  console.log('Debug mode');
}
```

## Корректные примеры

```javascript
var userName = 'John';
console.log(userName); // правильное имя

function calculate(x) {
  return x * 2; // x передан как параметр
}

// объявление переменной
var DEBUG = true;
if (DEBUG) {
  console.log('Debug mode');
}

// использование глобальных переменных браузера
console.log(window.location.href);
console.log(document.title);
```