# correctness/role-supports-aria-props

Правило `role-supports-aria-props` из набора `correctness` контролирует аспект «Role Supports Aria Props». Оно помогает избегать проблем в коде, связанных с требованием «role supports aria props», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/role-supports-aria-props.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/role-supports-aria-props выполняется.

```js
function examplePassingCorrectness() {
  // Требование «role supports aria props» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/role-supports-aria-props сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «role supports aria props» нарушено.
  return false;
}
```
