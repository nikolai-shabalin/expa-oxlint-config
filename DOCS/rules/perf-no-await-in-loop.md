# perf/no-await-in-loop

Правило `no-await-in-loop` из набора `perf` контролирует аспект «No Await In Loop». Оно помогает избегать проблем в коде, связанных с требованием «no await in loop», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-await-in-loop.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/no-await-in-loop выполняется.

```js
function examplePassingPerf() {
  // Требование «no await in loop» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/no-await-in-loop сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «no await in loop» нарушено.
  return false;
}
```
