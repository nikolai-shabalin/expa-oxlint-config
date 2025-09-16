# correctness/no-redundant-roles

Правило `no-redundant-roles` из набора `correctness` контролирует аспект «No Redundant Roles». Оно помогает избегать проблем в коде, связанных с требованием «no redundant roles», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-redundant-roles.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-redundant-roles выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no redundant roles» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-redundant-roles сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no redundant roles» нарушено.
  return false;
}
```
