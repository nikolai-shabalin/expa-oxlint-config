# correctness/require-property-type

Правило `require-property-type` из набора `correctness` контролирует аспект «Require Property Type». Оно помогает избегать проблем в коде, связанных с требованием «require property type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-property-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-property-type выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require property type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-property-type сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require property type» нарушено.
  return false;
}
```
