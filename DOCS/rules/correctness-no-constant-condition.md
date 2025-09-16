# correctness/no-constant-condition

Правило `no-constant-condition` из набора `correctness` контролирует аспект «No Constant Condition». Оно помогает избегать проблем в коде, связанных с требованием «no constant condition», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-constant-condition.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-constant-condition выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no constant condition» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-constant-condition сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no constant condition» нарушено.
  return false;
}
```
