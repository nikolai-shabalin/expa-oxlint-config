# pedantic/require-returns-description

Правило `require-returns-description` из набора `pedantic` контролирует аспект «Require Returns Description». Оно помогает избегать проблем в коде, связанных с требованием «require returns description», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-returns-description.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-returns-description выполняется.

```js
function examplePassingPedantic() {
  // Требование «require returns description» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-returns-description сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require returns description» нарушено.
  return false;
}
```
