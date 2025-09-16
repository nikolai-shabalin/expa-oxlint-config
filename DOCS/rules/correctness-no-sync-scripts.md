# correctness/no-sync-scripts

Правило `no-sync-scripts` из набора `correctness` контролирует аспект «No Sync Scripts». Оно помогает избегать проблем в коде, связанных с требованием «no sync scripts», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-sync-scripts.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-sync-scripts выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no sync scripts» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-sync-scripts сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no sync scripts» нарушено.
  return false;
}
```
