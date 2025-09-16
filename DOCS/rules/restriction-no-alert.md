# restriction/no-alert

Правило `no-alert` из набора `restriction` контролирует аспект «No Alert». Оно помогает избегать проблем в коде, связанных с требованием «no alert», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-alert.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-alert выполняется.

```js
function examplePassingRestriction() {
  // Требование «no alert» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-alert сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no alert» нарушено.
  return false;
}
```
