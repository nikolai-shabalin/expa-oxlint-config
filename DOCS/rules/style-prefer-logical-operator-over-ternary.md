# style/prefer-logical-operator-over-ternary

Правило `prefer-logical-operator-over-ternary` из набора `style` контролирует аспект «Prefer Logical Operator Over Ternary». Оно помогает избегать проблем в коде, связанных с требованием «prefer logical operator over ternary», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-logical-operator-over-ternary.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-logical-operator-over-ternary выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer logical operator over ternary» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-logical-operator-over-ternary сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer logical operator over ternary» нарушено.
  return false;
}
```
