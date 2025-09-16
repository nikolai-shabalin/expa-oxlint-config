# restriction/no-commonjs

Правило `no-commonjs` из набора `restriction` контролирует аспект «No Commonjs». Оно помогает избегать проблем в коде, связанных с требованием «no commonjs», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-commonjs.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-commonjs выполняется.

```js
function examplePassingRestriction() {
  // Требование «no commonjs» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-commonjs сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no commonjs» нарушено.
  return false;
}
```
