# style/no-unreadable-array-destructuring

Правило `no-unreadable-array-destructuring` из набора `style` контролирует аспект «No Unreadable Array Destructuring». Оно помогает избегать проблем в коде, связанных с требованием «no unreadable array destructuring», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unreadable-array-destructuring.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-unreadable-array-destructuring выполняется.

```js
function examplePassingStyle() {
  // Требование «no unreadable array destructuring» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-unreadable-array-destructuring сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no unreadable array destructuring» нарушено.
  return false;
}
```
