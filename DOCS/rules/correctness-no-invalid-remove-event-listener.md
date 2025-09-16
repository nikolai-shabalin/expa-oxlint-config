# correctness/no-invalid-remove-event-listener

Правило `no-invalid-remove-event-listener` из набора `correctness` контролирует аспект «No Invalid Remove Event Listener». Оно помогает избегать проблем в коде, связанных с требованием «no invalid remove event listener», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-invalid-remove-event-listener.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-invalid-remove-event-listener выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no invalid remove event listener» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-invalid-remove-event-listener сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no invalid remove event listener» нарушено.
  return false;
}
```
