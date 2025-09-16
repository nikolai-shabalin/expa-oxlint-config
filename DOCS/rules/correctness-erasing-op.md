# correctness/erasing-op

Правило `erasing-op` из набора `correctness` контролирует аспект «Erasing Op». Оно помогает избегать проблем в коде, связанных с требованием «erasing op», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/erasing-op.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/erasing-op выполняется.

```js
function examplePassingCorrectness() {
  // Требование «erasing op» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/erasing-op сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «erasing op» нарушено.
  return false;
}
```
