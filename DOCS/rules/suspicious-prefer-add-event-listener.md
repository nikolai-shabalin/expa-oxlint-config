# suspicious/prefer-add-event-listener

Правило `prefer-add-event-listener` из набора `suspicious` контролирует аспект «Prefer Add Event Listener». Оно помогает избегать проблем в коде, связанных с требованием «prefer add event listener», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-add-event-listener.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/prefer-add-event-listener выполняется.

```js
function examplePassingSuspicious() {
  // Требование «prefer add event listener» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/prefer-add-event-listener сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «prefer add event listener» нарушено.
  return false;
}
```
