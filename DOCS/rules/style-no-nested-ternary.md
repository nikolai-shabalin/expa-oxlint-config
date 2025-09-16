# style/no-nested-ternary

Правило `no-nested-ternary` из набора `style` контролирует аспект «No Nested Ternary». Оно помогает избегать проблем в коде, связанных с требованием «no nested ternary», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-nested-ternary.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-nested-ternary выполняется.

```js
function examplePassingStyle() {
  // Требование «no nested ternary» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-nested-ternary сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no nested ternary» нарушено.
  return false;
}
```
