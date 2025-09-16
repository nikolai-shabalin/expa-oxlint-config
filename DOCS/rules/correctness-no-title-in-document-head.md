# correctness/no-title-in-document-head

Правило `no-title-in-document-head` из набора `correctness` контролирует аспект «No Title In Document Head». Оно помогает избегать проблем в коде, связанных с требованием «no title in document head», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-title-in-document-head.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-title-in-document-head выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no title in document head» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-title-in-document-head сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no title in document head» нарушено.
  return false;
}
```
