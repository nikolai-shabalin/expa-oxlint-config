# correctness/no-eval

Правило `no-eval` из набора `correctness` контролирует аспект «No Eval». Оно помогает избегать проблем в коде, связанных с требованием «no eval», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-eval.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-eval выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no eval» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-eval сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no eval» нарушено.
  return false;
}
```
