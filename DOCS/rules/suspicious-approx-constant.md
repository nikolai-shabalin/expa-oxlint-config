# suspicious/approx-constant

Правило `approx-constant` из набора `suspicious` контролирует аспект «Approx Constant». Оно помогает избегать проблем в коде, связанных с требованием «approx constant», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/approx-constant.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/approx-constant выполняется.

```js
function examplePassingSuspicious() {
  // Требование «approx constant» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/approx-constant сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «approx constant» нарушено.
  return false;
}
```
