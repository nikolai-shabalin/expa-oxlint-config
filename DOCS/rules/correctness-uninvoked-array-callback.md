# correctness/uninvoked-array-callback

Правило `uninvoked-array-callback` из набора `correctness` контролирует аспект «Uninvoked Array Callback». Оно помогает избегать проблем в коде, связанных с требованием «uninvoked array callback», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/uninvoked-array-callback.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/uninvoked-array-callback выполняется.

```js
function examplePassingCorrectness() {
  // Требование «uninvoked array callback» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/uninvoked-array-callback сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «uninvoked array callback» нарушено.
  return false;
}
```
