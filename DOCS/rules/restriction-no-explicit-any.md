# restriction/no-explicit-any

Правило `no-explicit-any` из набора `restriction` контролирует аспект «No Explicit Any». Оно помогает избегать проблем в коде, связанных с требованием «no explicit any», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-explicit-any.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-explicit-any выполняется.

```js
function examplePassingRestriction() {
  // Требование «no explicit any» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-explicit-any сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no explicit any» нарушено.
  return false;
}
```
