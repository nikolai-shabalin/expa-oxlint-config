# suspicious/iframe-missing-sandbox

Правило `iframe-missing-sandbox` из набора `suspicious` контролирует аспект «Iframe Missing Sandbox». Оно помогает избегать проблем в коде, связанных с требованием «iframe missing sandbox», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/iframe-missing-sandbox.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/iframe-missing-sandbox выполняется.

```js
function examplePassingSuspicious() {
  // Требование «iframe missing sandbox» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/iframe-missing-sandbox сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «iframe missing sandbox» нарушено.
  return false;
}
```
