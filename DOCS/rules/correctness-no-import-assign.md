# correctness/no-import-assign

Правило `no-import-assign` из набора `correctness` контролирует аспект «No Import Assign». Оно помогает избегать проблем в коде, связанных с требованием «no import assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-import-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-import-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no import assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-import-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no import assign» нарушено.
  return false;
}
```
