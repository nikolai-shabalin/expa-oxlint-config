# correctness/no-array-delete

Правило `no-array-delete` из набора `correctness` контролирует аспект «No Array Delete». Оно помогает избегать проблем в коде, связанных с требованием «no array delete», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-delete.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-array-delete выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no array delete» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-array-delete сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no array delete» нарушено.
  return false;
}
```
