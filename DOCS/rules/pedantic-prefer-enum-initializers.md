# pedantic/prefer-enum-initializers

Правило `prefer-enum-initializers` из набора `pedantic` контролирует аспект «Prefer Enum Initializers». Оно помогает избегать проблем в коде, связанных с требованием «prefer enum initializers», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-enum-initializers.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-enum-initializers выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer enum initializers» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-enum-initializers сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer enum initializers» нарушено.
  return false;
}
```
