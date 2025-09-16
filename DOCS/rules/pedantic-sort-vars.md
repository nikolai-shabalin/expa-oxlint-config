# pedantic/sort-vars

Правило `sort-vars` из набора `pedantic` контролирует аспект «Sort Vars». Оно помогает избегать проблем в коде, связанных с требованием «sort vars», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/sort-vars.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/sort-vars выполняется.

```js
function examplePassingPedantic() {
  // Требование «sort vars» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/sort-vars сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «sort vars» нарушено.
  return false;
}
```
