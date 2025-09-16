# perf/prefer-array-find

Правило `prefer-array-find` из набора `perf` контролирует аспект «Prefer Array Find». Оно помогает избегать проблем в коде, связанных с требованием «prefer array find», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-array-find.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/prefer-array-find выполняется.

```js
function examplePassingPerf() {
  // Требование «prefer array find» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/prefer-array-find сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «prefer array find» нарушено.
  return false;
}
```
