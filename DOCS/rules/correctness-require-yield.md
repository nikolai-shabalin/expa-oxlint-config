# correctness/require-yield

Правило `require-yield` из набора `correctness` контролирует аспект «Require Yield». Оно помогает избегать проблем в коде, связанных с требованием «require yield», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-yield.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-yield выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require yield» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-yield сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require yield» нарушено.
  return false;
}
```
