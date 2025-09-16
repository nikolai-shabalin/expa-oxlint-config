# correctness/check-property-names

Правило `check-property-names` из набора `correctness` контролирует аспект «Check Property Names». Оно помогает избегать проблем в коде, связанных с требованием «check property names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/check-property-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/check-property-names выполняется.

```js
function examplePassingCorrectness() {
  // Требование «check property names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/check-property-names сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «check property names» нарушено.
  return false;
}
```
