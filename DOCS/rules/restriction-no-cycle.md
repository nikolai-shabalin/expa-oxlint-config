# restriction/no-cycle

Правило `no-cycle` из набора `restriction` контролирует аспект «No Cycle». Оно помогает избегать проблем в коде, связанных с требованием «no cycle», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-cycle.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-cycle выполняется.

```js
function examplePassingRestriction() {
  // Требование «no cycle» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-cycle сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no cycle» нарушено.
  return false;
}
```
