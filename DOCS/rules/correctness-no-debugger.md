# no-debugger

Запрещает использование оператора `debugger`. Операторы debugger должны быть удалены из production кода, так как они могут вызвать остановку выполнения в браузере.

## Проблемные примеры

```javascript
function getData() {
  debugger;
  return api.getData();
}

if (condition) {
  debugger;
  doSomething();
}
```

## Корректные примеры

```javascript
function getData() {
  return api.getData();
}

if (condition) {
  doSomething();
}

// Используйте console.log для отладки в production
function getData() {
  console.log('Getting data...');
  return api.getData();
}
```