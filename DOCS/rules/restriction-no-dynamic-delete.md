# restriction/no-dynamic-delete

Правило `no-dynamic-delete` из набора `restriction` контролирует аспект «No Dynamic Delete». Оно помогает избегать проблем в коде, связанных с требованием «no dynamic delete», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-dynamic-delete.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-dynamic-delete выполняется.

```js
function examplePassingRestriction() {
  // Требование «no dynamic delete» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-dynamic-delete сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no dynamic delete» нарушено.
  return false;
}
```
