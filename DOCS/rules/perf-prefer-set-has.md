# perf/prefer-set-has

Правило `prefer-set-has` из набора `perf` контролирует аспект «Prefer Set Has». Оно помогает избегать проблем в коде, связанных с требованием «prefer set has», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-set-has.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило perf/prefer-set-has выполняется.

```js
function examplePassingPerf() {
  // Требование «prefer set has» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило perf/prefer-set-has сигнализирует о проблеме.

```js
function exampleFailingPerf() {
  // Требование «prefer set has» нарушено.
  return false;
}
```
