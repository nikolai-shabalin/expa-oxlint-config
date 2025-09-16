# restriction/no-array-for-each

Правило `no-array-for-each` из набора `restriction` контролирует аспект «No Array For Each». Оно помогает избегать проблем в коде, связанных с требованием «no array for each», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-for-each.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-array-for-each выполняется.

```js
function examplePassingRestriction() {
  // Требование «no array for each» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-array-for-each сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no array for each» нарушено.
  return false;
}
```
