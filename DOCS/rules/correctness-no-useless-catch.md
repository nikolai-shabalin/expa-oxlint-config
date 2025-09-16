# correctness/no-useless-catch

Правило `no-useless-catch` из набора `correctness` контролирует аспект «No Useless Catch». Оно помогает избегать проблем в коде, связанных с требованием «no useless catch», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-catch.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-catch выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless catch» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-catch сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless catch» нарушено.
  return false;
}
```
