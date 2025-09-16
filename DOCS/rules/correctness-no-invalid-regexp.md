# correctness/no-invalid-regexp

Правило `no-invalid-regexp` из набора `correctness` контролирует аспект «No Invalid Regexp». Оно помогает избегать проблем в коде, связанных с требованием «no invalid regexp», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-invalid-regexp.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-invalid-regexp выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no invalid regexp» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-invalid-regexp сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no invalid regexp» нарушено.
  return false;
}
```
