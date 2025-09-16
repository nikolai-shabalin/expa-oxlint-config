# pedantic/restrict-plus-operands

Правило `restrict-plus-operands` из набора `pedantic` контролирует аспект «Restrict Plus Operands». Оно помогает избегать проблем в коде, связанных с требованием «restrict plus operands», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/restrict-plus-operands.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/restrict-plus-operands выполняется.

```js
function examplePassingPedantic() {
  // Требование «restrict plus operands» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/restrict-plus-operands сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «restrict plus operands» нарушено.
  return false;
}
```
