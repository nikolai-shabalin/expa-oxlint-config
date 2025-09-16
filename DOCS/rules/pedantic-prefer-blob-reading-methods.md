# pedantic/prefer-blob-reading-methods

Правило `prefer-blob-reading-methods` из набора `pedantic` контролирует аспект «Prefer Blob Reading Methods». Оно помогает избегать проблем в коде, связанных с требованием «prefer blob reading methods», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-blob-reading-methods.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-blob-reading-methods выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer blob reading methods» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-blob-reading-methods сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer blob reading methods» нарушено.
  return false;
}
```
