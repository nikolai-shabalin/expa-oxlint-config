# restriction/no-length-as-slice-end

Правило `no-length-as-slice-end` из набора `restriction` контролирует аспект «No Length As Slice End». Оно помогает избегать проблем в коде, связанных с требованием «no length as slice end», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-length-as-slice-end.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-length-as-slice-end выполняется.

```js
function examplePassingRestriction() {
  // Требование «no length as slice end» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-length-as-slice-end сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no length as slice end» нарушено.
  return false;
}
```
