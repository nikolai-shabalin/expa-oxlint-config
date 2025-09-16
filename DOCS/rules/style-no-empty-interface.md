# style/no-empty-interface

Правило `no-empty-interface` из набора `style` контролирует аспект «No Empty Interface». Оно помогает избегать проблем в коде, связанных с требованием «no empty interface», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-interface.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-empty-interface выполняется.

```js
function examplePassingStyle() {
  // Требование «no empty interface» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-empty-interface сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no empty interface» нарушено.
  return false;
}
```
