# correctness/no-global-assign

Правило `no-global-assign` из набора `correctness` контролирует аспект «No Global Assign». Оно помогает избегать проблем в коде, связанных с требованием «no global assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-global-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-global-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no global assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-global-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no global assign» нарушено.
  return false;
}
```
