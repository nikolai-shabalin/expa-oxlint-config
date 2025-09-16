# correctness/require-property-description

Правило `require-property-description` из набора `correctness` контролирует аспект «Require Property Description». Оно помогает избегать проблем в коде, связанных с требованием «require property description», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-property-description.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-property-description выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require property description» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-property-description сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require property description» нарушено.
  return false;
}
```
