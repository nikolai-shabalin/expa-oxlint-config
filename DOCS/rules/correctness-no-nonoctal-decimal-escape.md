# correctness/no-nonoctal-decimal-escape

Правило `no-nonoctal-decimal-escape` из набора `correctness` контролирует аспект «No Nonoctal Decimal Escape». Оно помогает избегать проблем в коде, связанных с требованием «no nonoctal decimal escape», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-nonoctal-decimal-escape.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-nonoctal-decimal-escape выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no nonoctal decimal escape» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-nonoctal-decimal-escape сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no nonoctal decimal escape» нарушено.
  return false;
}
```
