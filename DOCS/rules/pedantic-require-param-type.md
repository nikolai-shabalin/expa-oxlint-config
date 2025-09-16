# pedantic/require-param-type

Правило `require-param-type` из набора `pedantic` контролирует аспект «Require Param Type». Оно помогает избегать проблем в коде, связанных с требованием «require param type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-param-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-param-type выполняется.

```js
function examplePassingPedantic() {
  // Требование «require param type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-param-type сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require param type» нарушено.
  return false;
}
```
