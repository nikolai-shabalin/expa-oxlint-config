# suspicious/no-unexpected-multiline

Правило `no-unexpected-multiline` из набора `suspicious` контролирует аспект «No Unexpected Multiline». Оно помогает избегать проблем в коде, связанных с требованием «no unexpected multiline», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unexpected-multiline.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unexpected-multiline выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unexpected multiline» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unexpected-multiline сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unexpected multiline» нарушено.
  return false;
}
```
