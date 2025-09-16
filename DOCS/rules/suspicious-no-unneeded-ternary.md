# suspicious/no-unneeded-ternary

Правило `no-unneeded-ternary` из набора `suspicious` контролирует аспект «No Unneeded Ternary». Оно помогает избегать проблем в коде, связанных с требованием «no unneeded ternary», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unneeded-ternary.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unneeded-ternary выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unneeded ternary» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unneeded-ternary сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unneeded ternary» нарушено.
  return false;
}
```
