# restriction/no-non-null-asserted-nullish-coalescing

Правило `no-non-null-asserted-nullish-coalescing` из набора `restriction` контролирует аспект «No Non Null Asserted Nullish Coalescing». Оно помогает избегать проблем в коде, связанных с требованием «no non null asserted nullish coalescing», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-non-null-asserted-nullish-coalescing.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-non-null-asserted-nullish-coalescing выполняется.

```js
function examplePassingRestriction() {
  // Требование «no non null asserted nullish coalescing» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-non-null-asserted-nullish-coalescing сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no non null asserted nullish coalescing» нарушено.
  return false;
}
```
