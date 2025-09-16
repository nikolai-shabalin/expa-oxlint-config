# restriction/no-document-cookie

Правило `no-document-cookie` из набора `restriction` контролирует аспект «No Document Cookie». Оно помогает избегать проблем в коде, связанных с требованием «no document cookie», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-document-cookie.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-document-cookie выполняется.

```js
function examplePassingRestriction() {
  // Требование «no document cookie» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-document-cookie сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no document cookie» нарушено.
  return false;
}
```
