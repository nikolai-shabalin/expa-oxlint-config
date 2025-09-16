# style/prefer-structured-clone

Правило `prefer-structured-clone` из набора `style` контролирует аспект «Prefer Structured Clone». Оно помогает избегать проблем в коде, связанных с требованием «prefer structured clone», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-structured-clone.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-structured-clone выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer structured clone» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-structured-clone сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer structured clone» нарушено.
  return false;
}
```
