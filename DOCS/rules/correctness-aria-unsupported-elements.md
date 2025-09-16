# correctness/aria-unsupported-elements

Правило `aria-unsupported-elements` из набора `correctness` контролирует аспект «Aria Unsupported Elements». Оно помогает избегать проблем в коде, связанных с требованием «aria unsupported elements», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/aria-unsupported-elements.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/aria-unsupported-elements выполняется.

```js
function examplePassingCorrectness() {
  // Требование «aria unsupported elements» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/aria-unsupported-elements сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «aria unsupported elements» нарушено.
  return false;
}
```
