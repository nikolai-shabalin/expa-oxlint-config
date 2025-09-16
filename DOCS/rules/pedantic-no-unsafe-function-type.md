# pedantic/no-unsafe-function-type

Правило `no-unsafe-function-type` из набора `pedantic` контролирует аспект «No Unsafe Function Type». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe function type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-function-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-function-type выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe function type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-function-type сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe function type» нарушено.
  return false;
}
```
