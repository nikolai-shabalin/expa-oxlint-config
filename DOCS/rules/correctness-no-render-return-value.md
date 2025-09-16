# correctness/no-render-return-value

Правило `no-render-return-value` из набора `correctness` контролирует аспект «No Render Return Value». Оно помогает избегать проблем в коде, связанных с требованием «no render return value», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-render-return-value.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-render-return-value выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no render return value» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-render-return-value сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no render return value» нарушено.
  return false;
}
```
