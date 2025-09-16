# correctness/require-yields

Правило `require-yields` из набора `correctness` контролирует аспект «Require Yields». Оно помогает избегать проблем в коде, связанных с требованием «require yields», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-yields.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-yields выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require yields» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-yields сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require yields» нарушено.
  return false;
}
```
