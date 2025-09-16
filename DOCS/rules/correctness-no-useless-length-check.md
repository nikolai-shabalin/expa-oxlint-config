# correctness/no-useless-length-check

Правило `no-useless-length-check` из набора `correctness` контролирует аспект «No Useless Length Check». Оно помогает избегать проблем в коде, связанных с требованием «no useless length check», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-length-check.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-length-check выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless length check» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-length-check сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless length check» нарушено.
  return false;
}
```
