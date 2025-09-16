# correctness/require-property-name

Правило `require-property-name` из набора `correctness` контролирует аспект «Require Property Name». Оно помогает избегать проблем в коде, связанных с требованием «require property name», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-property-name.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-property-name выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require property name» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-property-name сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require property name» нарушено.
  return false;
}
```
