# style/prefer-promise-reject-errors

Правило `prefer-promise-reject-errors` из набора `style` контролирует аспект «Prefer Promise Reject Errors». Оно помогает избегать проблем в коде, связанных с требованием «prefer promise reject errors», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-promise-reject-errors.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-promise-reject-errors выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer promise reject errors» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-promise-reject-errors сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer promise reject errors» нарушено.
  return false;
}
```
