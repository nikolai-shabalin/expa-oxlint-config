# no-const-assign

Запрещает переназначение переменных, объявленных с помощью `const`. Переменные, объявленные с помощью `const`, не могут быть переназначены.

## Проблемные примеры

```javascript
const PI = 3.14;
PI = 3.14159; // TypeError

const config = { debug: true };
config = { debug: false }; // TypeError

const items = [1, 2, 3];
items = [4, 5, 6]; // TypeError

function example() {
  const result = calculate();
  result = newValue; // TypeError
}
```

## Корректные примеры

```javascript
const PI = 3.14;
// PI остается неизменным

const config = { debug: true };
config.debug = false; // модификация свойства допустима
config.newProp = 'value'; // добавление свойства допустима

const items = [1, 2, 3];
items.push(4); // модификация содержимого допустима
items[0] = 0; // изменение элемента допустимо

// Используйте let для переменных, которые нужно переназначить
let result = calculate();
result = newValue; // корректно
```