# suspicious/no-async-endpoint-handlers

Правило `no-async-endpoint-handlers` из набора `suspicious` контролирует аспект «No Async Endpoint Handlers». Оно помогает избегать проблем в коде, связанных с требованием «no async endpoint handlers», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-async-endpoint-handlers.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-async-endpoint-handlers выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no async endpoint handlers» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-async-endpoint-handlers сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no async endpoint handlers» нарушено.
  return false;
}
```
