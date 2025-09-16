# pedantic/require-returns-type

Правило `require-returns-type` из набора `pedantic` контролирует аспект «Require Returns Type». Оно помогает избегать проблем в коде, связанных с требованием «require returns type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-returns-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-returns-type выполняется.

```js
function examplePassingPedantic() {
  // Требование «require returns type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-returns-type сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require returns type» нарушено.
  return false;
}
```
