# suspicious/no-extra-bind

Правило `no-extra-bind` из набора `suspicious` контролирует аспект «No Extra Bind». Оно помогает избегать проблем в коде, связанных с требованием «no extra bind», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extra-bind.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-extra-bind выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no extra bind» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-extra-bind сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no extra bind» нарушено.
  return false;
}
```
