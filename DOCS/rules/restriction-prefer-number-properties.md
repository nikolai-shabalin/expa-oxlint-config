# restriction/prefer-number-properties

Правило `prefer-number-properties` из набора `restriction` контролирует аспект «Prefer Number Properties». Оно помогает избегать проблем в коде, связанных с требованием «prefer number properties», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-number-properties.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/prefer-number-properties выполняется.

```js
function examplePassingRestriction() {
  // Требование «prefer number properties» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/prefer-number-properties сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «prefer number properties» нарушено.
  return false;
}
```
