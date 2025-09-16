# style/jsx-boolean-value

Правило `jsx-boolean-value` из набора `style` контролирует аспект «Jsx Boolean Value». Оно помогает избегать проблем в коде, связанных с требованием «jsx boolean value», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-boolean-value.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/jsx-boolean-value выполняется.

```js
function examplePassingStyle() {
  // Требование «jsx boolean value» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/jsx-boolean-value сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «jsx boolean value» нарушено.
  return false;
}
```
