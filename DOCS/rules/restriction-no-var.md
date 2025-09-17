# no-var

Требует использования `let` или `const` вместо `var`. ECMAScript 6 позволяет программистам создавать переменные с блочной областью видимости вместо функциональной области видимости, используя ключевые слова `let` и `const`.

## Проблемные примеры

```javascript
var count = 0;

function example() {
  var message = 'Hello';
  if (true) {
    var temp = 'temporary'; // функциональная область видимости
  }
  console.log(temp); // доступна здесь
}

for (var i = 0; i < 10; i++) {
  // i доступна вне цикла
}
console.log(i); // 10
```

## Корректные примеры

```javascript
let count = 0;
const MAX_COUNT = 100;

function example() {
  const message = 'Hello';
  if (true) {
    let temp = 'temporary'; // блочная область видимости
  }
  // console.log(temp); // ReferenceError - недоступна здесь
}

for (let i = 0; i < 10; i++) {
  // i ограничена циклом
}
// console.log(i); // ReferenceError - недоступна здесь

// Используйте const для значений, которые не изменяются
const config = { api: '/api/v1' };

// Используйте let для переменных, которые изменяются
let status = 'loading';
status = 'complete';
```