# correctness/no-with

Правило `no-with` из набора `correctness` контролирует аспект «No With». Оно помогает избегать проблем в коде, связанных с требованием «no with», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-with.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-with выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no with» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-with сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no with» нарушено.
  return false;
}
```
