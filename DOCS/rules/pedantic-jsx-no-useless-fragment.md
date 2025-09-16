# pedantic/jsx-no-useless-fragment

Правило `jsx-no-useless-fragment` из набора `pedantic` контролирует аспект «Jsx No Useless Fragment». Оно помогает избегать проблем в коде, связанных с требованием «jsx no useless fragment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-useless-fragment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/jsx-no-useless-fragment выполняется.

```js
function examplePassingPedantic() {
  // Требование «jsx no useless fragment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/jsx-no-useless-fragment сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «jsx no useless fragment» нарушено.
  return false;
}
```
