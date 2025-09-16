# pedantic/require-returns

Правило `require-returns` из набора `pedantic` контролирует аспект «Require Returns». Оно помогает избегать проблем в коде, связанных с требованием «require returns», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-returns.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-returns выполняется.

```js
function examplePassingPedantic() {
  // Требование «require returns» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-returns сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require returns» нарушено.
  return false;
}
```
