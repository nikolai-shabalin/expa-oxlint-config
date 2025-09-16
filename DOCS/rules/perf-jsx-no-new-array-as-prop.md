# perf/jsx-no-new-array-as-prop

Правило `jsx-no-new-array-as-prop` из набора `perf` контролирует аспект «Jsx No New Array As Prop». Оно помогает избегать проблем в коде, связанных с требованием «jsx no new array as prop», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-new-array-as-prop.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/jsx-no-new-array-as-prop выполняется.

```js
function examplePassingPerf() {
  // Требование «jsx no new array as prop» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/jsx-no-new-array-as-prop сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «jsx no new array as prop» нарушено.
  return false;
}
```
