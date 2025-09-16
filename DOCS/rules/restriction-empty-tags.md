# restriction/empty-tags

Правило `empty-tags` из набора `restriction` контролирует аспект «Empty Tags». Оно помогает избегать проблем в коде, связанных с требованием «empty tags», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/empty-tags.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/empty-tags выполняется.

```js
function examplePassingRestriction() {
  // Требование «empty tags» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/empty-tags сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «empty tags» нарушено.
  return false;
}
```
