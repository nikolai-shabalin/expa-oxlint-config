# correctness/no-duplicate-enum-values

Правило `no-duplicate-enum-values` из набора `correctness` контролирует аспект «No Duplicate Enum Values». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate enum values», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-enum-values.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-duplicate-enum-values выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no duplicate enum values» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-duplicate-enum-values сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no duplicate enum values» нарушено.
  return false;
}
```
