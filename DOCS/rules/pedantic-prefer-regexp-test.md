# pedantic/prefer-regexp-test

Правило `prefer-regexp-test` из набора `pedantic` контролирует аспект «Prefer Regexp Test». Оно помогает избегать проблем в коде, связанных с требованием «prefer regexp test», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-regexp-test.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-regexp-test выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer regexp test» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-regexp-test сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer regexp test» нарушено.
  return false;
}
```
