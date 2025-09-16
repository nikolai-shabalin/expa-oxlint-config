# restriction/promise-function-async

Правило `promise-function-async` из набора `restriction` контролирует аспект «Promise Function Async». Оно помогает избегать проблем в коде, связанных с требованием «promise function async», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/promise-function-async.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/promise-function-async выполняется.

```js
function examplePassingRestriction() {
  // Требование «promise function async» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/promise-function-async сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «promise function async» нарушено.
  return false;
}
```
