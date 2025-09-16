# pedantic/prefer-string-slice

Правило `prefer-string-slice` из набора `pedantic` контролирует аспект «Prefer String Slice». Оно помогает избегать проблем в коде, связанных с требованием «prefer string slice», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-string-slice.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-string-slice выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer string slice» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-string-slice сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer string slice» нарушено.
  return false;
}
```
