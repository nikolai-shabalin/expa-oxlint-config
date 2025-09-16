# correctness/no-class-assign

Правило `no-class-assign` из набора `correctness` контролирует аспект «No Class Assign». Оно помогает избегать проблем в коде, связанных с требованием «no class assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-class-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-class-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no class assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-class-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no class assign» нарушено.
  return false;
}
```
