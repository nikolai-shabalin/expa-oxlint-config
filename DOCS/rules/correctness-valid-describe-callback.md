# correctness/valid-describe-callback

Правило `valid-describe-callback` из набора `correctness` контролирует аспект «Valid Describe Callback». Оно помогает избегать проблем в коде, связанных с требованием «valid describe callback», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-describe-callback.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-describe-callback выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid describe callback» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-describe-callback сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid describe callback» нарушено.
  return false;
}
```
