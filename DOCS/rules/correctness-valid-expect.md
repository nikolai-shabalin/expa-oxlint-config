# correctness/valid-expect

Правило `valid-expect` из набора `correctness` контролирует аспект «Valid Expect». Оно помогает избегать проблем в коде, связанных с требованием «valid expect», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-expect.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-expect выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid expect» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-expect сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid expect» нарушено.
  return false;
}
```
