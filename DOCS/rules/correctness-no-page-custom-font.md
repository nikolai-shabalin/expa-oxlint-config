# correctness/no-page-custom-font

Правило `no-page-custom-font` из набора `correctness` контролирует аспект «No Page Custom Font». Оно помогает избегать проблем в коде, связанных с требованием «no page custom font», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-page-custom-font.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-page-custom-font выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no page custom font» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-page-custom-font сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no page custom font» нарушено.
  return false;
}
```
