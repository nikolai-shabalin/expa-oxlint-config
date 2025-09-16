# pedantic/prefer-array-some

Правило `prefer-array-some` из набора `pedantic` контролирует аспект «Prefer Array Some». Оно помогает избегать проблем в коде, связанных с требованием «prefer array some», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-array-some.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-array-some выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer array some» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-array-some сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer array some» нарушено.
  return false;
}
```
