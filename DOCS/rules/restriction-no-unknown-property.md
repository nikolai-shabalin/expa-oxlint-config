# restriction/no-unknown-property

Правило `no-unknown-property` из набора `restriction` контролирует аспект «No Unknown Property». Оно помогает избегать проблем в коде, связанных с требованием «no unknown property», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unknown-property.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-unknown-property выполняется.

```js
function examplePassingRestriction() {
  // Требование «no unknown property» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-unknown-property сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no unknown property» нарушено.
  return false;
}
```
