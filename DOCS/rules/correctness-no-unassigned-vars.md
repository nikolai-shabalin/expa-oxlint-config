# correctness/no-unassigned-vars

Правило `no-unassigned-vars` из набора `correctness` контролирует аспект «No Unassigned Vars». Оно помогает избегать проблем в коде, связанных с требованием «no unassigned vars», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unassigned-vars.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unassigned-vars выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unassigned vars» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unassigned-vars сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unassigned vars» нарушено.
  return false;
}
```
