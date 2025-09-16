# correctness/google-font-display

Правило `google-font-display` из набора `correctness` контролирует аспект «Google Font Display». Оно помогает избегать проблем в коде, связанных с требованием «google font display», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/google-font-display.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/google-font-display выполняется.

```js
function examplePassingCorrectness() {
  // Требование «google font display» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/google-font-display сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «google font display» нарушено.
  return false;
}
```
