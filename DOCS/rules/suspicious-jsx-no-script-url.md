# suspicious/jsx-no-script-url

Правило `jsx-no-script-url` из набора `suspicious` контролирует аспект «Jsx No Script Url». Оно помогает избегать проблем в коде, связанных с требованием «jsx no script url», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-script-url.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/jsx-no-script-url выполняется.

```js
function examplePassingSuspicious() {
  // Требование «jsx no script url» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/jsx-no-script-url сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «jsx no script url» нарушено.
  return false;
}
```
