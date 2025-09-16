# restriction/prefer-modern-math-apis

Правило `prefer-modern-math-apis` из набора `restriction` контролирует аспект «Prefer Modern Math Apis». Оно помогает избегать проблем в коде, связанных с требованием «prefer modern math apis», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-modern-math-apis.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/prefer-modern-math-apis выполняется.

```js
function examplePassingRestriction() {
  // Требование «prefer modern math apis» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/prefer-modern-math-apis сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «prefer modern math apis» нарушено.
  return false;
}
```
