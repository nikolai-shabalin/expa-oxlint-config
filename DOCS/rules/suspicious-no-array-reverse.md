# suspicious/no-array-reverse

Правило `no-array-reverse` из набора `suspicious` контролирует аспект «No Array Reverse». Оно помогает избегать проблем в коде, связанных с требованием «no array reverse», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-reverse.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-array-reverse выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no array reverse» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-array-reverse сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no array reverse» нарушено.
  return false;
}
```
