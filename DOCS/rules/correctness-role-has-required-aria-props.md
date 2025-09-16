# correctness/role-has-required-aria-props

Правило `role-has-required-aria-props` из набора `correctness` контролирует аспект «Role Has Required Aria Props». Оно помогает избегать проблем в коде, связанных с требованием «role has required aria props», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/role-has-required-aria-props.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/role-has-required-aria-props выполняется.

```js
function examplePassingCorrectness() {
  // Требование «role has required aria props» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/role-has-required-aria-props сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «role has required aria props» нарушено.
  return false;
}
```
