# style/arrow-body-style

Правило `arrow-body-style` из набора `style` контролирует аспект «Arrow Body Style». Оно помогает избегать проблем в коде, связанных с требованием «arrow body style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/arrow-body-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/arrow-body-style выполняется.

```js
function examplePassingStyle() {
  // Требование «arrow body style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/arrow-body-style сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «arrow body style» нарушено.
  return false;
}
```
