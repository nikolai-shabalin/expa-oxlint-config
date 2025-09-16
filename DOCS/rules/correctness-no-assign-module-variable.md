# correctness/no-assign-module-variable

Правило `no-assign-module-variable` из набора `correctness` контролирует аспект «No Assign Module Variable». Оно помогает избегать проблем в коде, связанных с требованием «no assign module variable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-assign-module-variable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-assign-module-variable выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no assign module variable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-assign-module-variable сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no assign module variable» нарушено.
  return false;
}
```
