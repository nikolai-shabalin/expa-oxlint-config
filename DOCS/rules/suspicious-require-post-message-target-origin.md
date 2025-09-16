# suspicious/require-post-message-target-origin

Правило `require-post-message-target-origin` из набора `suspicious` контролирует аспект «Require Post Message Target Origin». Оно помогает избегать проблем в коде, связанных с требованием «require post message target origin», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-post-message-target-origin.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/require-post-message-target-origin выполняется.

```js
function examplePassingSuspicious() {
  // Требование «require post message target origin» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/require-post-message-target-origin сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «require post message target origin» нарушено.
  return false;
}
```
