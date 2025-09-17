# no-unused-vars

Запрещает неиспользуемые переменные. Неиспользуемые переменные обычно являются результатом незавершенного рефакторинга и занимают место в коде без какой-либо цели.

## Проблемные примеры

```javascript
// неиспользуемая переменная
var unusedVar = 42;

function example() {
  var x = 1; // неиспользуемая локальная переменная
  return 2;
}

// неиспользуемый параметр функции
function process(data, unusedParam) {
  return data.map(item => item.value);
}

// неиспользуемый импорт
import { used, unused } from 'module';
console.log(used);
```

## Корректные примеры

```javascript
var usedVar = 42;
console.log(usedVar);

function example() {
  var x = 1;
  return x + 1; // переменная используется
}

// параметр с префиксом _ считается намеренно неиспользуемым
function process(data, _unusedParam) {
  return data.map(item => item.value);
}

// используем только необходимые импорты
import { used } from 'module';
console.log(used);
```