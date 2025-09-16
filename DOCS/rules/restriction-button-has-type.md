# restriction/button-has-type

Правило `button-has-type` из набора `restriction` контролирует аспект «Button Has Type». Оно помогает избегать проблем в коде, связанных с требованием «button has type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/button-has-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/button-has-type выполняется.

```js
function examplePassingRestriction() {
  // Требование «button has type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/button-has-type сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «button has type» нарушено.
  return false;
}
```
