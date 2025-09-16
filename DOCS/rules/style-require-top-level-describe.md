# style/require-top-level-describe

Правило `require-top-level-describe` из набора `style` контролирует аспект «Require Top Level Describe». Оно помогает избегать проблем в коде, связанных с требованием «require top level describe», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-top-level-describe.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/require-top-level-describe выполняется.

```js
function examplePassingStyle() {
  // Требование «require top level describe» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/require-top-level-describe сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «require top level describe» нарушено.
  return false;
}
```
