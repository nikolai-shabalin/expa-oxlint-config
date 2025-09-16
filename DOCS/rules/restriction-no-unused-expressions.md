# restriction/no-unused-expressions

Правило `no-unused-expressions` из набора `restriction` контролирует аспект «No Unused Expressions». Оно помогает избегать проблем в коде, связанных с требованием «no unused expressions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unused-expressions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-unused-expressions выполняется.

```js
function examplePassingRestriction() {
  // Требование «no unused expressions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-unused-expressions сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no unused expressions» нарушено.
  return false;
}
```
