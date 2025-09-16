# restriction/extensions

Правило `extensions` из набора `restriction` контролирует аспект «Extensions». Оно помогает избегать проблем в коде, связанных с требованием «extensions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/extensions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/extensions выполняется.

```js
function examplePassingRestriction() {
  // Требование «extensions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/extensions сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «extensions» нарушено.
  return false;
}
```
