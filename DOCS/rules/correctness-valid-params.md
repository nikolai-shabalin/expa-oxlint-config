# correctness/valid-params

Правило `valid-params` из набора `correctness` контролирует аспект «Valid Params». Оно помогает избегать проблем в коде, связанных с требованием «valid params», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-params.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-params выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid params» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-params сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid params» нарушено.
  return false;
}
```
