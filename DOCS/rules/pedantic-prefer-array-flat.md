# pedantic/prefer-array-flat

Правило `prefer-array-flat` из набора `pedantic` контролирует аспект «Prefer Array Flat». Оно помогает избегать проблем в коде, связанных с требованием «prefer array flat», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-array-flat.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-array-flat выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer array flat» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-array-flat сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer array flat» нарушено.
  return false;
}
```
