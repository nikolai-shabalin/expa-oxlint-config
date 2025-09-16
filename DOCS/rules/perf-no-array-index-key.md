# perf/no-array-index-key

Правило `no-array-index-key` из набора `perf` контролирует аспект «No Array Index Key». Оно помогает избегать проблем в коде, связанных с требованием «no array index key», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-index-key.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/no-array-index-key выполняется.

```js
function examplePassingPerf() {
  // Требование «no array index key» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/no-array-index-key сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «no array index key» нарушено.
  return false;
}
```
