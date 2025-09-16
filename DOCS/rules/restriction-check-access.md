# restriction/check-access

Правило `check-access` из набора `restriction` контролирует аспект «Check Access». Оно помогает избегать проблем в коде, связанных с требованием «check access», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/check-access.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/check-access выполняется.

```js
function examplePassingRestriction() {
  // Требование «check access» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/check-access сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «check access» нарушено.
  return false;
}
```
