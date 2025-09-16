# restriction/use-unknown-in-catch-callback-variable

Правило `use-unknown-in-catch-callback-variable` из набора `restriction` контролирует аспект «Use Unknown In Catch Callback Variable». Оно помогает избегать проблем в коде, связанных с требованием «use unknown in catch callback variable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/use-unknown-in-catch-callback-variable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/use-unknown-in-catch-callback-variable выполняется.

```js
function examplePassingRestriction() {
  // Требование «use unknown in catch callback variable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/use-unknown-in-catch-callback-variable сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «use unknown in catch callback variable» нарушено.
  return false;
}
```
