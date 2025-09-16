# suspicious/no-promise-in-callback

Правило `no-promise-in-callback` из набора `suspicious` контролирует аспект «No Promise In Callback». Оно помогает избегать проблем в коде, связанных с требованием «no promise in callback», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-promise-in-callback.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-promise-in-callback выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no promise in callback» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-promise-in-callback сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no promise in callback» нарушено.
  return false;
}
```
