# correctness/no-implied-eval

Правило `no-implied-eval` из набора `correctness` контролирует аспект «No Implied Eval». Оно помогает избегать проблем в коде, связанных с требованием «no implied eval», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-implied-eval.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-implied-eval выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no implied eval» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-implied-eval сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no implied eval» нарушено.
  return false;
}
```
