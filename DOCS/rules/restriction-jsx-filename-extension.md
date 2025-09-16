# restriction/jsx-filename-extension

Правило `jsx-filename-extension` из набора `restriction` контролирует аспект «Jsx Filename Extension». Оно помогает избегать проблем в коде, связанных с требованием «jsx filename extension», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-filename-extension.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/jsx-filename-extension выполняется.

```js
function examplePassingRestriction() {
  // Требование «jsx filename extension» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/jsx-filename-extension сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «jsx filename extension» нарушено.
  return false;
}
```
