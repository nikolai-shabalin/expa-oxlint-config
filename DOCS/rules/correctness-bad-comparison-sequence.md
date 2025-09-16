# correctness/bad-comparison-sequence

Правило `bad-comparison-sequence` из набора `correctness` контролирует аспект «Bad Comparison Sequence». Оно помогает избегать проблем в коде, связанных с требованием «bad comparison sequence», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-comparison-sequence.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-comparison-sequence выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad comparison sequence» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-comparison-sequence сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad comparison sequence» нарушено.
  return false;
}
```
