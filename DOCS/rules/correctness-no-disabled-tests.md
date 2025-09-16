# correctness/no-disabled-tests

Правило `no-disabled-tests` из набора `correctness` контролирует аспект «No Disabled Tests». Оно помогает избегать проблем в коде, связанных с требованием «no disabled tests», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-disabled-tests.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-disabled-tests выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no disabled tests» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-disabled-tests сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no disabled tests» нарушено.
  return false;
}
```
