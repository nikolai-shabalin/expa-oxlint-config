# style/require-array-join-separator

Правило `require-array-join-separator` из набора `style` контролирует аспект «Require Array Join Separator». Оно помогает избегать проблем в коде, связанных с требованием «require array join separator», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-array-join-separator.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/require-array-join-separator выполняется.

```js
function examplePassingStyle() {
  // Требование «require array join separator» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/require-array-join-separator сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «require array join separator» нарушено.
  return false;
}
```
