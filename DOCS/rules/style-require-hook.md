# style/require-hook

Правило `require-hook` из набора `style` контролирует аспект «Require Hook». Оно помогает избегать проблем в коде, связанных с требованием «require hook», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-hook.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/require-hook выполняется.

```js
function examplePassingStyle() {
  // Требование «require hook» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/require-hook сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «require hook» нарушено.
  return false;
}
```
