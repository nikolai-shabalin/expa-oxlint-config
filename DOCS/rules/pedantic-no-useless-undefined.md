# pedantic/no-useless-undefined

Правило `no-useless-undefined` из набора `pedantic` контролирует аспект «No Useless Undefined». Оно помогает избегать проблем в коде, связанных с требованием «no useless undefined», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-undefined.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-useless-undefined выполняется.

```js
function examplePassingPedantic() {
  // Требование «no useless undefined» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-useless-undefined сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no useless undefined» нарушено.
  return false;
}
```
