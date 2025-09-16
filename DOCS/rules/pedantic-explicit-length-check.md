# pedantic/explicit-length-check

Правило `explicit-length-check` из набора `pedantic` контролирует аспект «Explicit Length Check». Оно помогает избегать проблем в коде, связанных с требованием «explicit length check», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/explicit-length-check.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/explicit-length-check выполняется.

```js
function examplePassingPedantic() {
  // Требование «explicit length check» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/explicit-length-check сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «explicit length check» нарушено.
  return false;
}
```
