# restriction/no-dynamic-require

Правило `no-dynamic-require` из набора `restriction` контролирует аспект «No Dynamic Require». Оно помогает избегать проблем в коде, связанных с требованием «no dynamic require», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-dynamic-require.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-dynamic-require выполняется.

```js
function examplePassingRestriction() {
  // Требование «no dynamic require» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-dynamic-require сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no dynamic require» нарушено.
  return false;
}
```
