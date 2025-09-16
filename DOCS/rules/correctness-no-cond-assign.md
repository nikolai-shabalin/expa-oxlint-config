# correctness/no-cond-assign

Правило `no-cond-assign` из набора `correctness` контролирует аспект «No Cond Assign». Оно помогает избегать проблем в коде, связанных с требованием «no cond assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-cond-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-cond-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no cond assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-cond-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no cond assign» нарушено.
  return false;
}
```
