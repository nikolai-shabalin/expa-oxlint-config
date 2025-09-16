# restriction/no-plusplus

Правило `no-plusplus` из набора `restriction` контролирует аспект «No Plusplus». Оно помогает избегать проблем в коде, связанных с требованием «no plusplus», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-plusplus.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-plusplus выполняется.

```js
function examplePassingRestriction() {
  // Требование «no plusplus» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-plusplus сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no plusplus» нарушено.
  return false;
}
```
