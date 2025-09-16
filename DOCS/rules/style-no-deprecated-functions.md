# style/no-deprecated-functions

Правило `no-deprecated-functions` из набора `style` контролирует аспект «No Deprecated Functions». Оно помогает избегать проблем в коде, связанных с требованием «no deprecated functions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-deprecated-functions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-deprecated-functions выполняется.

```js
function examplePassingStyle() {
  // Требование «no deprecated functions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-deprecated-functions сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no deprecated functions» нарушено.
  return false;
}
```
