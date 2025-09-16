# perf/prefer-array-flat-map

Правило `prefer-array-flat-map` из набора `perf` контролирует аспект «Prefer Array Flat Map». Оно помогает избегать проблем в коде, связанных с требованием «prefer array flat map», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-array-flat-map.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/prefer-array-flat-map выполняется.

```js
function examplePassingPerf() {
  // Требование «prefer array flat map» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/prefer-array-flat-map сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «prefer array flat map» нарушено.
  return false;
}
```
