# restriction/no-eq-null

Правило `no-eq-null` из набора `restriction` контролирует аспект «No Eq Null». Оно помогает избегать проблем в коде, связанных с требованием «no eq null», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-eq-null.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-eq-null выполняется.

```js
function examplePassingRestriction() {
  // Требование «no eq null» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-eq-null сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no eq null» нарушено.
  return false;
}
```
