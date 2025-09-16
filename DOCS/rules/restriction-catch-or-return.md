# restriction/catch-or-return

Правило `catch-or-return` из набора `restriction` контролирует аспект «Catch Or Return». Оно помогает избегать проблем в коде, связанных с требованием «catch or return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/catch-or-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/catch-or-return выполняется.

```js
function examplePassingRestriction() {
  // Требование «catch or return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/catch-or-return сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «catch or return» нарушено.
  return false;
}
```
