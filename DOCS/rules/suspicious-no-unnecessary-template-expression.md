# suspicious/no-unnecessary-template-expression

Правило `no-unnecessary-template-expression` из набора `suspicious` контролирует аспект «No Unnecessary Template Expression». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary template expression», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-template-expression.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unnecessary-template-expression выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unnecessary template expression» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unnecessary-template-expression сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unnecessary template expression» нарушено.
  return false;
}
```
