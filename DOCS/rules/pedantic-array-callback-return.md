# pedantic/array-callback-return

Правило `array-callback-return` из набора `pedantic` контролирует аспект «Array Callback Return». Оно помогает избегать проблем в коде, связанных с требованием «array callback return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/array-callback-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/array-callback-return выполняется.

```js
function examplePassingPedantic() {
  // Требование «array callback return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/array-callback-return сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «array callback return» нарушено.
  return false;
}
```
