# pedantic/no-mixed-enums

Правило `no-mixed-enums` из набора `pedantic` контролирует аспект «No Mixed Enums». Оно помогает избегать проблем в коде, связанных с требованием «no mixed enums», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-mixed-enums.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-mixed-enums выполняется.

```js
function examplePassingPedantic() {
  // Требование «no mixed enums» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-mixed-enums сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no mixed enums» нарушено.
  return false;
}
```
