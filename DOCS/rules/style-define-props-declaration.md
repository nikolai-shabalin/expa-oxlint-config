# style/define-props-declaration

Правило `define-props-declaration` из набора `style` контролирует аспект «Define Props Declaration». Оно помогает избегать проблем в коде, связанных с требованием «define props declaration», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/define-props-declaration.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/define-props-declaration выполняется.

```js
function examplePassingStyle() {
  // Требование «define props declaration» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/define-props-declaration сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «define props declaration» нарушено.
  return false;
}
```
