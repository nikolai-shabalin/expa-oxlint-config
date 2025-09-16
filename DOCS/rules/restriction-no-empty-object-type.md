# restriction/no-empty-object-type

Правило `no-empty-object-type` из набора `restriction` контролирует аспект «No Empty Object Type». Оно помогает избегать проблем в коде, связанных с требованием «no empty object type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-object-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-empty-object-type выполняется.

```js
function examplePassingRestriction() {
  // Требование «no empty object type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-empty-object-type сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no empty object type» нарушено.
  return false;
}
```
