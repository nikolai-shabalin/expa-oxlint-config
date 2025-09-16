# correctness/const-comparisons

Правило `const-comparisons` из набора `correctness` контролирует аспект «Const Comparisons». Оно помогает избегать проблем в коде, связанных с требованием «const comparisons», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/const-comparisons.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/const-comparisons выполняется.

```js
function examplePassingCorrectness() {
  // Требование «const comparisons» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/const-comparisons сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «const comparisons» нарушено.
  return false;
}
```
