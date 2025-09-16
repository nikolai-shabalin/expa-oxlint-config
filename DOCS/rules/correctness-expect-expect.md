# correctness/expect-expect

Правило `expect-expect` из набора `correctness` контролирует аспект «Expect Expect». Оно помогает избегать проблем в коде, связанных с требованием «expect expect», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/expect-expect.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/expect-expect выполняется.

```js
function examplePassingCorrectness() {
  // Требование «expect expect» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/expect-expect сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «expect expect» нарушено.
  return false;
}
```
