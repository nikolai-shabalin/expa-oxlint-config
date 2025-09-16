# style/define-emits-declaration

Правило `define-emits-declaration` из набора `style` контролирует аспект «Define Emits Declaration». Оно помогает избегать проблем в коде, связанных с требованием «define emits declaration», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/define-emits-declaration.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/define-emits-declaration выполняется.

```js
function examplePassingStyle() {
  // Требование «define emits declaration» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/define-emits-declaration сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «define emits declaration» нарушено.
  return false;
}
```
