# restriction/non-nullable-type-assertion-style

Правило `non-nullable-type-assertion-style` из набора `restriction` контролирует аспект «Non Nullable Type Assertion Style». Оно помогает избегать проблем в коде, связанных с требованием «non nullable type assertion style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/non-nullable-type-assertion-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/non-nullable-type-assertion-style выполняется.

```js
function examplePassingRestriction() {
  // Требование «non nullable type assertion style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/non-nullable-type-assertion-style сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «non nullable type assertion style» нарушено.
  return false;
}
```
