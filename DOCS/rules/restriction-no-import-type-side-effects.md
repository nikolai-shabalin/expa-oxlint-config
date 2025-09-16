# restriction/no-import-type-side-effects

Правило `no-import-type-side-effects` из набора `restriction` контролирует аспект «No Import Type Side Effects». Оно помогает избегать проблем в коде, связанных с требованием «no import type side effects», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-import-type-side-effects.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-import-type-side-effects выполняется.

```js
function examplePassingRestriction() {
  // Требование «no import type side effects» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-import-type-side-effects сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no import type side effects» нарушено.
  return false;
}
```
