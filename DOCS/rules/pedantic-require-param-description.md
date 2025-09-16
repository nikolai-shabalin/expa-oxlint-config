# pedantic/require-param-description

Правило `require-param-description` из набора `pedantic` контролирует аспект «Require Param Description». Оно помогает избегать проблем в коде, связанных с требованием «require param description», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-param-description.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-param-description выполняется.

```js
function examplePassingPedantic() {
  // Требование «require param description» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-param-description сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require param description» нарушено.
  return false;
}
```
