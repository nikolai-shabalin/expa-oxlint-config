# correctness/no-head-import-in-document

Правило `no-head-import-in-document` из набора `correctness` контролирует аспект «No Head Import In Document». Оно помогает избегать проблем в коде, связанных с требованием «no head import in document», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-head-import-in-document.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-head-import-in-document выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no head import in document» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-head-import-in-document сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no head import in document» нарушено.
  return false;
}
```
