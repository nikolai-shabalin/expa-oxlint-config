# pedantic/consistent-empty-array-spread

Правило `consistent-empty-array-spread` из набора `pedantic` контролирует аспект «Consistent Empty Array Spread». Оно помогает избегать проблем в коде, связанных с требованием «consistent empty array spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-empty-array-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/consistent-empty-array-spread выполняется.

```js
function examplePassingPedantic() {
  // Требование «consistent empty array spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/consistent-empty-array-spread сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «consistent empty array spread» нарушено.
  return false;
}
```
