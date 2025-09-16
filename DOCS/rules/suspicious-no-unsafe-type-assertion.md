# suspicious/no-unsafe-type-assertion

Правило `no-unsafe-type-assertion` из набора `suspicious` контролирует аспект «No Unsafe Type Assertion». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe type assertion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-type-assertion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unsafe-type-assertion выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unsafe type assertion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unsafe-type-assertion сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unsafe type assertion» нарушено.
  return false;
}
```
