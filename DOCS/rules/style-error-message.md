# style/error-message

Правило `error-message` из набора `style` контролирует аспект «Error Message». Оно помогает избегать проблем в коде, связанных с требованием «error message», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/error-message.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/error-message выполняется.

```js
function examplePassingStyle() {
  // Требование «error message» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/error-message сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «error message» нарушено.
  return false;
}
```
