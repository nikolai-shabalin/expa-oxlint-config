# restriction/no-new-require

Правило `no-new-require` из набора `restriction` контролирует аспект «No New Require». Оно помогает избегать проблем в коде, связанных с требованием «no new require», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-require.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-new-require выполняется.

```js
function examplePassingRestriction() {
  // Требование «no new require» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-new-require сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no new require» нарушено.
  return false;
}
```
