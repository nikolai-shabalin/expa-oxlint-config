# suspicious/no-unnecessary-type-assertion

Правило `no-unnecessary-type-assertion` из набора `suspicious` контролирует аспект «No Unnecessary Type Assertion». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary type assertion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-type-assertion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unnecessary-type-assertion выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unnecessary type assertion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unnecessary-type-assertion сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unnecessary type assertion» нарушено.
  return false;
}
```
