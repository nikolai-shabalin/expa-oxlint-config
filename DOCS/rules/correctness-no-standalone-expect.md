# correctness/no-standalone-expect

Правило `no-standalone-expect` из набора `correctness` контролирует аспект «No Standalone Expect». Оно помогает избегать проблем в коде, связанных с требованием «no standalone expect», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-standalone-expect.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-standalone-expect выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no standalone expect» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-standalone-expect сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no standalone expect» нарушено.
  return false;
}
```
