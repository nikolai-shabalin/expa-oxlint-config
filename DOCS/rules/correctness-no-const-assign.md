# correctness/no-const-assign

Правило `no-const-assign` из набора `correctness` контролирует аспект «No Const Assign». Оно помогает избегать проблем в коде, связанных с требованием «no const assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-const-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-const-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no const assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-const-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no const assign» нарушено.
  return false;
}
```
