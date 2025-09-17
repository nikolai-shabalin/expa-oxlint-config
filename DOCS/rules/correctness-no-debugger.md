# correctness/no-debugger

Запрещает использование оператора debugger в коде.

## Описание

Оператор `debugger` используется для остановки выполнения JavaScript и вызова отладочной функции. В продакшен коде debugger операторы должны быть удалены, так как они могут привести к неожиданной остановке выполнения программы.

## Проблемные примеры

```javascript
function isTruthy(x) {
    debugger;
    return Boolean(x);
}

var x = 1;
debugger;
x = 2;

if (condition) {
    debugger;
    doSomething();
}
```

## Правильные примеры

```javascript
function isTruthy(x) {
    return Boolean(x);
}

var x = 1;
x = 2;

if (condition) {
    doSomething();
}

// Вместо debugger можно использовать console.log для отладки
function debug(x) {
    console.log('Debug value:', x);
    return Boolean(x);
}
```

## Когда отключать

Это правило можно отключить только в среде разработки, если вы активно используете debugger для отладки. В продакшен сборке это правило всегда должно быть включено.