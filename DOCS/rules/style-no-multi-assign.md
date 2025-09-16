# style/no-multi-assign

Правило `no-multi-assign` из набора `style` контролирует аспект «No Multi Assign». Оно помогает избегать проблем в коде, связанных с требованием «no multi assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-multi-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-multi-assign выполняется.

```js
function examplePassingStyle() {
  // Требование «no multi assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-multi-assign сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no multi assign» нарушено.
  return false;
}
```
