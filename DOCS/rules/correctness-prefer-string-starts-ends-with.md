# correctness/prefer-string-starts-ends-with

Правило `prefer-string-starts-ends-with` из набора `correctness` контролирует аспект «Prefer String Starts Ends With». Оно помогает избегать проблем в коде, связанных с требованием «prefer string starts ends with», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-string-starts-ends-with.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/prefer-string-starts-ends-with выполняется.

```js
function examplePassingCorrectness() {
  // Требование «prefer string starts ends with» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/prefer-string-starts-ends-with сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «prefer string starts ends with» нарушено.
  return false;
}
```
