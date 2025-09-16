# perf/jsx-no-new-function-as-prop

Правило `jsx-no-new-function-as-prop` из набора `perf` контролирует аспект «Jsx No New Function As Prop». Оно помогает избегать проблем в коде, связанных с требованием «jsx no new function as prop», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-new-function-as-prop.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/jsx-no-new-function-as-prop выполняется.

```js
function examplePassingPerf() {
  // Требование «jsx no new function as prop» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/jsx-no-new-function-as-prop сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «jsx no new function as prop» нарушено.
  return false;
}
```
