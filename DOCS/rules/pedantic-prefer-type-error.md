# pedantic/prefer-type-error

Правило `prefer-type-error` из набора `pedantic` контролирует аспект «Prefer Type Error». Оно помогает избегать проблем в коде, связанных с требованием «prefer type error», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-type-error.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-type-error выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer type error» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-type-error сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer type error» нарушено.
  return false;
}
```
