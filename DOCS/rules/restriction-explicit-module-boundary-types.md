# restriction/explicit-module-boundary-types

Правило `explicit-module-boundary-types` из набора `restriction` контролирует аспект «Explicit Module Boundary Types». Оно помогает избегать проблем в коде, связанных с требованием «explicit module boundary types», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/explicit-module-boundary-types.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/explicit-module-boundary-types выполняется.

```js
function examplePassingRestriction() {
  // Требование «explicit module boundary types» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/explicit-module-boundary-types сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «explicit module boundary types» нарушено.
  return false;
}
```
