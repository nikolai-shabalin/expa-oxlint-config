# style/padding-around-test-blocks

Правило `padding-around-test-blocks` из набора `style` контролирует аспект «Padding Around Test Blocks». Оно помогает избегать проблем в коде, связанных с требованием «padding around test blocks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/padding-around-test-blocks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/padding-around-test-blocks выполняется.

```js
function examplePassingStyle() {
  // Требование «padding around test blocks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/padding-around-test-blocks сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «padding around test blocks» нарушено.
  return false;
}
```
