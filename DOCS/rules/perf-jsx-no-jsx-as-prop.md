# perf/jsx-no-jsx-as-prop

Правило `jsx-no-jsx-as-prop` из набора `perf` контролирует аспект «Jsx No Jsx As Prop». Оно помогает избегать проблем в коде, связанных с требованием «jsx no jsx as prop», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-jsx-as-prop.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/jsx-no-jsx-as-prop выполняется.

```js
function examplePassingPerf() {
  // Требование «jsx no jsx as prop» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/jsx-no-jsx-as-prop сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «jsx no jsx as prop» нарушено.
  return false;
}
```
