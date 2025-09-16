# style/jsx-handler-names

Правило `jsx-handler-names` из набора `style` контролирует аспект «Jsx Handler Names». Оно помогает избегать проблем в коде, связанных с требованием «jsx handler names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-handler-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/jsx-handler-names выполняется.

```js
function examplePassingStyle() {
  // Требование «jsx handler names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/jsx-handler-names сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «jsx handler names» нарушено.
  return false;
}
```
