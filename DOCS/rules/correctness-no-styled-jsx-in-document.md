# correctness/no-styled-jsx-in-document

Правило `no-styled-jsx-in-document` из набора `correctness` контролирует аспект «No Styled Jsx In Document». Оно помогает избегать проблем в коде, связанных с требованием «no styled jsx in document», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-styled-jsx-in-document.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-styled-jsx-in-document выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no styled jsx in document» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-styled-jsx-in-document сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no styled jsx in document» нарушено.
  return false;
}
```
