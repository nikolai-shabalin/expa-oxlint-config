# correctness/no-func-assign

Правило `no-func-assign` из набора `correctness` контролирует аспект «No Func Assign». Оно помогает избегать проблем в коде, связанных с требованием «no func assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-func-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-func-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no func assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-func-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no func assign» нарушено.
  return false;
}
```
