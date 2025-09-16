# style/no-lone-blocks

Правило `no-lone-blocks` из набора `style` контролирует аспект «No Lone Blocks». Оно помогает избегать проблем в коде, связанных с требованием «no lone blocks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-lone-blocks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-lone-blocks выполняется.

```js
function examplePassingStyle() {
  // Требование «no lone blocks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-lone-blocks сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no lone blocks» нарушено.
  return false;
}
```
