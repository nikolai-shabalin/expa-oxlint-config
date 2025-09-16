# restriction/no-optional-chaining

Правило `no-optional-chaining` из набора `restriction` контролирует аспект «No Optional Chaining». Оно помогает избегать проблем в коде, связанных с требованием «no optional chaining», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-optional-chaining.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-optional-chaining выполняется.

```js
function examplePassingRestriction() {
  // Требование «no optional chaining» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-optional-chaining сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no optional chaining» нарушено.
  return false;
}
```
