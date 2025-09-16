# restriction/no-amd

Правило `no-amd` из набора `restriction` контролирует аспект «No Amd». Оно помогает избегать проблем в коде, связанных с требованием «no amd», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-amd.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-amd выполняется.

```js
function examplePassingRestriction() {
  // Требование «no amd» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-amd сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no amd» нарушено.
  return false;
}
```
