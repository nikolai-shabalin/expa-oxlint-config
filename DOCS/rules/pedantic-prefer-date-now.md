# pedantic/prefer-date-now

Правило `prefer-date-now` из набора `pedantic` контролирует аспект «Prefer Date Now». Оно помогает избегать проблем в коде, связанных с требованием «prefer date now», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-date-now.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-date-now выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer date now» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-date-now сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer date now» нарушено.
  return false;
}
```
