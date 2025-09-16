# restriction/no-array-reduce

Правило `no-array-reduce` из набора `restriction` контролирует аспект «No Array Reduce». Оно помогает избегать проблем в коде, связанных с требованием «no array reduce», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-reduce.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-array-reduce выполняется.

```js
function examplePassingRestriction() {
  // Требование «no array reduce» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-array-reduce сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no array reduce» нарушено.
  return false;
}
```
