# correctness/no-duplicate-head

Правило `no-duplicate-head` из набора `correctness` контролирует аспект «No Duplicate Head». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate head», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-head.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-duplicate-head выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no duplicate head» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-duplicate-head сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no duplicate head» нарушено.
  return false;
}
```
