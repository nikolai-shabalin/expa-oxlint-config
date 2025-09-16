# restriction/unicode-bom

Правило `unicode-bom` из набора `restriction` контролирует аспект «Unicode Bom». Оно помогает избегать проблем в коде, связанных с требованием «unicode bom», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/unicode-bom.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/unicode-bom выполняется.

```js
function examplePassingRestriction() {
  // Требование «unicode bom» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/unicode-bom сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «unicode bom» нарушено.
  return false;
}
```
