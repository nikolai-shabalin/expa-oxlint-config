# restriction/no-magic-array-flat-depth

Правило `no-magic-array-flat-depth` из набора `restriction` контролирует аспект «No Magic Array Flat Depth». Оно помогает избегать проблем в коде, связанных с требованием «no magic array flat depth», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-magic-array-flat-depth.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-magic-array-flat-depth выполняется.

```js
function examplePassingRestriction() {
  // Требование «no magic array flat depth» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-magic-array-flat-depth сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no magic array flat depth» нарушено.
  return false;
}
```
