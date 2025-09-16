# suspicious/no-unnecessary-boolean-literal-compare

Правило `no-unnecessary-boolean-literal-compare` из набора `suspicious` контролирует аспект «No Unnecessary Boolean Literal Compare». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary boolean literal compare», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-boolean-literal-compare.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unnecessary-boolean-literal-compare выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unnecessary boolean literal compare» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unnecessary-boolean-literal-compare сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unnecessary boolean literal compare» нарушено.
  return false;
}
```
