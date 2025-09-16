# correctness/no-focused-tests

Правило `no-focused-tests` из набора `correctness` контролирует аспект «No Focused Tests». Оно помогает избегать проблем в коде, связанных с требованием «no focused tests», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-focused-tests.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-focused-tests выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no focused tests» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-focused-tests сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no focused tests» нарушено.
  return false;
}
```
