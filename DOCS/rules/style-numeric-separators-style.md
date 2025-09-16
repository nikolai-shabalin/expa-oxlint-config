# style/numeric-separators-style

Правило `numeric-separators-style` из набора `style` контролирует аспект «Numeric Separators Style». Оно помогает избегать проблем в коде, связанных с требованием «numeric separators style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/numeric-separators-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/numeric-separators-style выполняется.

```js
function examplePassingStyle() {
  // Требование «numeric separators style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/numeric-separators-style сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «numeric separators style» нарушено.
  return false;
}
```
