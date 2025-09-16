# correctness/no-extra-non-null-assertion

Правило `no-extra-non-null-assertion` из набора `correctness` контролирует аспект «No Extra Non Null Assertion». Оно помогает избегать проблем в коде, связанных с требованием «no extra non null assertion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extra-non-null-assertion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-extra-non-null-assertion выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no extra non null assertion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-extra-non-null-assertion сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no extra non null assertion» нарушено.
  return false;
}
```
