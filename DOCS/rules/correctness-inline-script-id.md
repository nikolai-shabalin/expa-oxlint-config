# correctness/inline-script-id

Правило `inline-script-id` из набора `correctness` контролирует аспект «Inline Script Id». Оно помогает избегать проблем в коде, связанных с требованием «inline script id», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/inline-script-id.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/inline-script-id выполняется.

```js
function examplePassingCorrectness() {
  // Требование «inline script id» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/inline-script-id сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «inline script id» нарушено.
  return false;
}
```
