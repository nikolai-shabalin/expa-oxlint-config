# suspicious/no-unsafe-enum-comparison

Правило `no-unsafe-enum-comparison` из набора `suspicious` контролирует аспект «No Unsafe Enum Comparison». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe enum comparison», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-enum-comparison.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unsafe-enum-comparison выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unsafe enum comparison» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unsafe-enum-comparison сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unsafe enum comparison» нарушено.
  return false;
}
```
