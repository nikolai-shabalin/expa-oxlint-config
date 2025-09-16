# correctness/require-local-test-context-for-concurrent-snapshots

Правило `require-local-test-context-for-concurrent-snapshots` из набора `correctness` контролирует аспект «Require Local Test Context For Concurrent Snapshots». Оно помогает избегать проблем в коде, связанных с требованием «require local test context for concurrent snapshots», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-local-test-context-for-concurrent-snapshots.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-local-test-context-for-concurrent-snapshots выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require local test context for concurrent snapshots» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-local-test-context-for-concurrent-snapshots сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require local test context for concurrent snapshots» нарушено.
  return false;
}
```
