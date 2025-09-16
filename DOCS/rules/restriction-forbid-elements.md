# restriction/forbid-elements

Правило `forbid-elements` из набора `restriction` контролирует аспект «Forbid Elements». Оно помогает избегать проблем в коде, связанных с требованием «forbid elements», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/forbid-elements.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/forbid-elements выполняется.

```js
function examplePassingRestriction() {
  // Требование «forbid elements» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/forbid-elements сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «forbid elements» нарушено.
  return false;
}
```
