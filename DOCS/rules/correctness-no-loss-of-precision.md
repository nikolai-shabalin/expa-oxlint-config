# correctness/no-loss-of-precision

Правило `no-loss-of-precision` из набора `correctness` контролирует аспект «No Loss Of Precision». Оно помогает избегать проблем в коде, связанных с требованием «no loss of precision», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-loss-of-precision.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-loss-of-precision выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no loss of precision» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-loss-of-precision сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no loss of precision» нарушено.
  return false;
}
```
