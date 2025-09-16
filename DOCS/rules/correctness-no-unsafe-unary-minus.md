# correctness/no-unsafe-unary-minus

Правило `no-unsafe-unary-minus` из набора `correctness` контролирует аспект «No Unsafe Unary Minus». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe unary minus», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-unary-minus.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unsafe-unary-minus выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unsafe unary minus» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unsafe-unary-minus сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unsafe unary minus» нарушено.
  return false;
}
```
