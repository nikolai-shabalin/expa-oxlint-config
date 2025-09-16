# pedantic/prefer-query-selector

Правило `prefer-query-selector` из набора `pedantic` контролирует аспект «Prefer Query Selector». Оно помогает избегать проблем в коде, связанных с требованием «prefer query selector», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-query-selector.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-query-selector выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer query selector» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-query-selector сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer query selector» нарушено.
  return false;
}
```
