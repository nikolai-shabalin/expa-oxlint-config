# restriction/no-undefined

Правило `no-undefined` из набора `restriction` контролирует аспект «No Undefined». Оно помогает избегать проблем в коде, связанных с требованием «no undefined», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-undefined.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-undefined выполняется.

```js
function examplePassingRestriction() {
  // Требование «no undefined» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-undefined сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no undefined» нарушено.
  return false;
}
```
