# correctness/no-empty-pattern

Правило `no-empty-pattern` из набора `correctness` контролирует аспект «No Empty Pattern». Оно помогает избегать проблем в коде, связанных с требованием «no empty pattern», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-pattern.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-empty-pattern выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no empty pattern» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-empty-pattern сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no empty pattern» нарушено.
  return false;
}
```
