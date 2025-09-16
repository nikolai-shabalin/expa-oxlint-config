# perf/no-useless-call

Правило `no-useless-call` из набора `perf` контролирует аспект «No Useless Call». Оно помогает избегать проблем в коде, связанных с требованием «no useless call», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-call.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/no-useless-call выполняется.

```js
function examplePassingPerf() {
  // Требование «no useless call» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/no-useless-call сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «no useless call» нарушено.
  return false;
}
```
