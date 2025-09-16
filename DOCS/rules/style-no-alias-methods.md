# style/no-alias-methods

Правило `no-alias-methods` из набора `style` контролирует аспект «No Alias Methods». Оно помогает избегать проблем в коде, связанных с требованием «no alias methods», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-alias-methods.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-alias-methods выполняется.

```js
function examplePassingStyle() {
  // Требование «no alias methods» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-alias-methods сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no alias methods» нарушено.
  return false;
}
```
