# style/no-done-callback

Правило `no-done-callback` из набора `style` контролирует аспект «No Done Callback». Оно помогает избегать проблем в коде, связанных с требованием «no done callback», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-done-callback.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-done-callback выполняется.

```js
function examplePassingStyle() {
  // Требование «no done callback» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-done-callback сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no done callback» нарушено.
  return false;
}
```
