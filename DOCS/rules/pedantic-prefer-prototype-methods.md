# pedantic/prefer-prototype-methods

Правило `prefer-prototype-methods` из набора `pedantic` контролирует аспект «Prefer Prototype Methods». Оно помогает избегать проблем в коде, связанных с требованием «prefer prototype methods», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-prototype-methods.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-prototype-methods выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer prototype methods» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-prototype-methods сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer prototype methods» нарушено.
  return false;
}
```
