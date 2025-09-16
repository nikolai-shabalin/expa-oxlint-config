# correctness/bad-char-at-comparison

Правило `bad-char-at-comparison` из набора `correctness` контролирует аспект «Bad Char At Comparison». Оно помогает избегать проблем в коде, связанных с требованием «bad char at comparison», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-char-at-comparison.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-char-at-comparison выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad char at comparison» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-char-at-comparison сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad char at comparison» нарушено.
  return false;
}
```
