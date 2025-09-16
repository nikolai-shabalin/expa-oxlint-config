# correctness/no-conditional-expect

Правило `no-conditional-expect` из набора `correctness` контролирует аспект «No Conditional Expect». Оно помогает избегать проблем в коде, связанных с требованием «no conditional expect», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-conditional-expect.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-conditional-expect выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no conditional expect» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-conditional-expect сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no conditional expect» нарушено.
  return false;
}
```
