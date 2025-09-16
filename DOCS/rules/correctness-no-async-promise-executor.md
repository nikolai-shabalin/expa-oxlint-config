# correctness/no-async-promise-executor

Правило `no-async-promise-executor` из набора `correctness` контролирует аспект «No Async Promise Executor». Оно помогает избегать проблем в коде, связанных с требованием «no async promise executor», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-async-promise-executor.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-async-promise-executor выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no async promise executor» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-async-promise-executor сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no async promise executor» нарушено.
  return false;
}
```
