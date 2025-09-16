# correctness/no-non-null-asserted-optional-chain

Правило `no-non-null-asserted-optional-chain` из набора `correctness` контролирует аспект «No Non Null Asserted Optional Chain». Оно помогает избегать проблем в коде, связанных с требованием «no non null asserted optional chain», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-non-null-asserted-optional-chain.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-non-null-asserted-optional-chain выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no non null asserted optional chain» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-non-null-asserted-optional-chain сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no non null asserted optional chain» нарушено.
  return false;
}
```
