# correctness/no-direct-mutation-state

Правило `no-direct-mutation-state` из набора `correctness` контролирует аспект «No Direct Mutation State». Оно помогает избегать проблем в коде, связанных с требованием «no direct mutation state», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-direct-mutation-state.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-direct-mutation-state выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no direct mutation state» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-direct-mutation-state сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no direct mutation state» нарушено.
  return false;
}
```
