# style/prefer-optional-catch-binding

Правило `prefer-optional-catch-binding` из набора `style` контролирует аспект «Prefer Optional Catch Binding». Оно помогает избегать проблем в коде, связанных с требованием «prefer optional catch binding», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-optional-catch-binding.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-optional-catch-binding выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer optional catch binding» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-optional-catch-binding сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer optional catch binding» нарушено.
  return false;
}
```
