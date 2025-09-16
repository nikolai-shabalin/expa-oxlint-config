# correctness/no-html-link-for-pages

Правило `no-html-link-for-pages` из набора `correctness` контролирует аспект «No Html Link For Pages». Оно помогает избегать проблем в коде, связанных с требованием «no html link for pages», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-html-link-for-pages.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-html-link-for-pages выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no html link for pages» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-html-link-for-pages сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no html link for pages» нарушено.
  return false;
}
```
