# restriction/no-restricted-imports

Правило `no-restricted-imports` из набора `restriction` контролирует аспект «No Restricted Imports». Оно помогает избегать проблем в коде, связанных с требованием «no restricted imports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-restricted-imports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-restricted-imports выполняется.

```js
function examplePassingRestriction() {
  // Требование «no restricted imports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-restricted-imports сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no restricted imports» нарушено.
  return false;
}
```
