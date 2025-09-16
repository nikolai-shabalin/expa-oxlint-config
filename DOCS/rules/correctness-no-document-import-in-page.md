# correctness/no-document-import-in-page

Правило `no-document-import-in-page` из набора `correctness` контролирует аспект «No Document Import In Page». Оно помогает избегать проблем в коде, связанных с требованием «no document import in page», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-document-import-in-page.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-document-import-in-page выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no document import in page» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-document-import-in-page сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no document import in page» нарушено.
  return false;
}
```
