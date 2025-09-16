# style/array-type

Правило `array-type` из набора `style` контролирует аспект «Array Type». Оно помогает избегать проблем в коде, связанных с требованием «array type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/array-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/array-type выполняется.

```js
function examplePassingStyle() {
  // Требование «array type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/array-type сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «array type» нарушено.
  return false;
}
```
