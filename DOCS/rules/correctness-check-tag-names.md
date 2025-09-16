# correctness/check-tag-names

Правило `check-tag-names` из набора `correctness` контролирует аспект «Check Tag Names». Оно помогает избегать проблем в коде, связанных с требованием «check tag names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/check-tag-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/check-tag-names выполняется.

```js
function examplePassingCorrectness() {
  // Требование «check tag names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/check-tag-names сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «check tag names» нарушено.
  return false;
}
```
