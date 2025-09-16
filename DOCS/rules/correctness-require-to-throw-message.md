# correctness/require-to-throw-message

Правило `require-to-throw-message` из набора `correctness` контролирует аспект «Require To Throw Message». Оно помогает избегать проблем в коде, связанных с требованием «require to throw message», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-to-throw-message.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-to-throw-message выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require to throw message» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-to-throw-message сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require to throw message» нарушено.
  return false;
}
```
