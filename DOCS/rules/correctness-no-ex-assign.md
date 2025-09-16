# correctness/no-ex-assign

Правило `no-ex-assign` из набора `correctness` контролирует аспект «No Ex Assign». Оно помогает избегать проблем в коде, связанных с требованием «no ex assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-ex-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-ex-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no ex assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-ex-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no ex assign» нарушено.
  return false;
}
```
