# correctness/no-conditional-tests

Правило `no-conditional-tests` из набора `correctness` контролирует аспект «No Conditional Tests». Оно помогает избегать проблем в коде, связанных с требованием «no conditional tests», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-conditional-tests.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-conditional-tests выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no conditional tests» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-conditional-tests сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no conditional tests» нарушено.
  return false;
}
```
