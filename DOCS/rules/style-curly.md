# curly

Обеспечивает последовательное использование фигурных скобок для всех управляющих операторов. JavaScript позволяет опускать фигурные скобки, когда блок содержит только один оператор, но это может привести к ошибкам.

## Проблемные примеры

```javascript
if (condition)
  doSomething();

if (condition) doSomething();
else doSomethingElse();

while (condition)
  iterate();

for (let i = 0; i < 10; i++)
  process(i);

if (condition)
  if (anotherCondition)
    doSomething();
```

## Корректные примеры

```javascript
if (condition) {
  doSomething();
}

if (condition) {
  doSomething();
} else {
  doSomethingElse();
}

while (condition) {
  iterate();
}

for (let i = 0; i < 10; i++) {
  process(i);
}

if (condition) {
  if (anotherCondition) {
    doSomething();
  }
}
```