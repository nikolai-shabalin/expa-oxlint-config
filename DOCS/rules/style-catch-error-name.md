# style/catch-error-name

Правило `catch-error-name` из набора `style` контролирует аспект «Catch Error Name». Оно помогает избегать проблем в коде, связанных с требованием «catch error name», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/catch-error-name.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/catch-error-name выполняется.

```js
function examplePassingStyle() {
  // Требование «catch error name» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/catch-error-name сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «catch error name» нарушено.
  return false;
}
```
