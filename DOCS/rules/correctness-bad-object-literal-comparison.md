# correctness/bad-object-literal-comparison

Правило `bad-object-literal-comparison` из набора `correctness` контролирует аспект «Bad Object Literal Comparison». Оно помогает избегать проблем в коде, связанных с требованием «bad object literal comparison», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-object-literal-comparison.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-object-literal-comparison выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad object literal comparison» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-object-literal-comparison сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad object literal comparison» нарушено.
  return false;
}
```
