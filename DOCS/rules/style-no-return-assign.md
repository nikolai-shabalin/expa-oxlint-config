# style/no-return-assign

Правило `no-return-assign` из набора `style` контролирует аспект «No Return Assign». Оно помогает избегать проблем в коде, связанных с требованием «no return assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-return-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-return-assign выполняется.

```js
function examplePassingStyle() {
  // Требование «no return assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-return-assign сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no return assign» нарушено.
  return false;
}
```
