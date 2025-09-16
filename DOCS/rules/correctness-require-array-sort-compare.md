# correctness/require-array-sort-compare

Правило `require-array-sort-compare` из набора `correctness` контролирует аспект «Require Array Sort Compare». Оно помогает избегать проблем в коде, связанных с требованием «require array sort compare», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-array-sort-compare.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-array-sort-compare выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require array sort compare» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-array-sort-compare сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require array sort compare» нарушено.
  return false;
}
```
