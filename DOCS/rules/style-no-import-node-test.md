# style/no-import-node-test

Правило `no-import-node-test` из набора `style` контролирует аспект «No Import Node Test». Оно помогает избегать проблем в коде, связанных с требованием «no import node test», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-import-node-test.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-import-node-test выполняется.

```js
function examplePassingStyle() {
  // Требование «no import node test» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-import-node-test сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no import node test» нарушено.
  return false;
}
```
