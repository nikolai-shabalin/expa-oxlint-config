# correctness/no-useless-fallback-in-spread

Правило `no-useless-fallback-in-spread` из набора `correctness` контролирует аспект «No Useless Fallback In Spread». Оно помогает избегать проблем в коде, связанных с требованием «no useless fallback in spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-fallback-in-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-fallback-in-spread выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless fallback in spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-fallback-in-spread сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless fallback in spread» нарушено.
  return false;
}
```
