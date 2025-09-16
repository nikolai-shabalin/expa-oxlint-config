# restriction/bad-bitwise-operator

Правило `bad-bitwise-operator` из набора `restriction` контролирует аспект «Bad Bitwise Operator». Оно помогает избегать проблем в коде, связанных с требованием «bad bitwise operator», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-bitwise-operator.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/bad-bitwise-operator выполняется.

```js
function examplePassingRestriction() {
  // Требование «bad bitwise operator» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/bad-bitwise-operator сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «bad bitwise operator» нарушено.
  return false;
}
```
