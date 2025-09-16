# correctness/no-useless-escape

Правило `no-useless-escape` из набора `correctness` контролирует аспект «No Useless Escape». Оно помогает избегать проблем в коде, связанных с требованием «no useless escape», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-escape.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-escape выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless escape» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-escape сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless escape» нарушено.
  return false;
}
```
