# perf/no-accumulating-spread

Правило `no-accumulating-spread` из набора `perf` контролирует аспект «No Accumulating Spread». Оно помогает избегать проблем в коде, связанных с требованием «no accumulating spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-accumulating-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/no-accumulating-spread выполняется.

```js
function examplePassingPerf() {
  // Требование «no accumulating spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/no-accumulating-spread сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «no accumulating spread» нарушено.
  return false;
}
```
