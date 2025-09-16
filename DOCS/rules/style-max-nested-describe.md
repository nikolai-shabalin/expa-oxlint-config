# style/max-nested-describe

Правило `max-nested-describe` из набора `style` контролирует аспект «Max Nested Describe». Оно помогает избегать проблем в коде, связанных с требованием «max nested describe», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-nested-describe.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/max-nested-describe выполняется.

```js
function examplePassingStyle() {
  // Требование «max nested describe» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/max-nested-describe сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «max nested describe» нарушено.
  return false;
}
```
