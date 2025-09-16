# style/prefer-function-type

Правило `prefer-function-type` из набора `style` контролирует аспект «Prefer Function Type». Оно помогает избегать проблем в коде, связанных с требованием «prefer function type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-function-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-function-type выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer function type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-function-type сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer function type» нарушено.
  return false;
}
```
