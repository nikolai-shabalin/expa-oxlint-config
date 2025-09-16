# restriction/no-require-imports

Правило `no-require-imports` из набора `restriction` контролирует аспект «No Require Imports». Оно помогает избегать проблем в коде, связанных с требованием «no require imports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-require-imports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-require-imports выполняется.

```js
function examplePassingRestriction() {
  // Требование «no require imports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-require-imports сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no require imports» нарушено.
  return false;
}
```
