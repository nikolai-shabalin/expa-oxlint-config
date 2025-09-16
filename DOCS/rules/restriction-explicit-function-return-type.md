# restriction/explicit-function-return-type

Правило `explicit-function-return-type` из набора `restriction` контролирует аспект «Explicit Function Return Type». Оно помогает избегать проблем в коде, связанных с требованием «explicit function return type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/explicit-function-return-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/explicit-function-return-type выполняется.

```js
function examplePassingRestriction() {
  // Требование «explicit function return type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/explicit-function-return-type сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «explicit function return type» нарушено.
  return false;
}
```
