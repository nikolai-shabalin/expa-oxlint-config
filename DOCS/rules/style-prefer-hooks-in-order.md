# style/prefer-hooks-in-order

Правило `prefer-hooks-in-order` из набора `style` контролирует аспект «Prefer Hooks In Order». Оно помогает избегать проблем в коде, связанных с требованием «prefer hooks in order», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-hooks-in-order.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-hooks-in-order выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer hooks in order» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-hooks-in-order сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer hooks in order» нарушено.
  return false;
}
```
