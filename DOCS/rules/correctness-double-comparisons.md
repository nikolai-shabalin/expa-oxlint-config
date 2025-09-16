# correctness/double-comparisons

Правило `double-comparisons` из набора `correctness` контролирует аспект «Double Comparisons». Оно помогает избегать проблем в коде, связанных с требованием «double comparisons», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/double-comparisons.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/double-comparisons выполняется.

```js
function examplePassingCorrectness() {
  // Требование «double comparisons» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/double-comparisons сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «double comparisons» нарушено.
  return false;
}
```
