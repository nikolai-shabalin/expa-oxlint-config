# correctness/no-compare-neg-zero

Правило `no-compare-neg-zero` из набора `correctness` контролирует аспект «No Compare Neg Zero». Оно помогает избегать проблем в коде, связанных с требованием «no compare neg zero», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-compare-neg-zero.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-compare-neg-zero выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no compare neg zero» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-compare-neg-zero сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no compare neg zero» нарушено.
  return false;
}
```
