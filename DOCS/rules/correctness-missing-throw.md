# correctness/missing-throw

Правило `missing-throw` из набора `correctness` контролирует аспект «Missing Throw». Оно помогает избегать проблем в коде, связанных с требованием «missing throw», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/missing-throw.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/missing-throw выполняется.

```js
function examplePassingCorrectness() {
  // Требование «missing throw» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/missing-throw сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «missing throw» нарушено.
  return false;
}
```
