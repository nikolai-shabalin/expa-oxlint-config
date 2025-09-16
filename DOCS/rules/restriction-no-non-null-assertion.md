# restriction/no-non-null-assertion

Правило `no-non-null-assertion` из набора `restriction` контролирует аспект «No Non Null Assertion». Оно помогает избегать проблем в коде, связанных с требованием «no non null assertion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-non-null-assertion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-non-null-assertion выполняется.

```js
function examplePassingRestriction() {
  // Требование «no non null assertion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-non-null-assertion сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no non null assertion» нарушено.
  return false;
}
```
