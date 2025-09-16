# pedantic/prefer-promise-reject-errors

Правило `prefer-promise-reject-errors` из набора `pedantic` контролирует аспект «Prefer Promise Reject Errors». Оно помогает избегать проблем в коде, связанных с требованием «prefer promise reject errors», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-promise-reject-errors.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-promise-reject-errors выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer promise reject errors» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-promise-reject-errors сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer promise reject errors» нарушено.
  return false;
}
```
