# pedantic/no-inner-declarations

Правило `no-inner-declarations` из набора `pedantic` контролирует аспект «No Inner Declarations». Оно помогает избегать проблем в коде, связанных с требованием «no inner declarations», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-inner-declarations.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-inner-declarations выполняется.

```js
function examplePassingPedantic() {
  // Требование «no inner declarations» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-inner-declarations сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no inner declarations» нарушено.
  return false;
}
```
