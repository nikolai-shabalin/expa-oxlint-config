# suspicious/style-prop-object

Правило `style-prop-object` из набора `suspicious` контролирует аспект «Style Prop Object». Оно помогает избегать проблем в коде, связанных с требованием «style prop object», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/style-prop-object.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/style-prop-object выполняется.

```js
function examplePassingSuspicious() {
  // Требование «style prop object» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/style-prop-object сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «style prop object» нарушено.
  return false;
}
```
