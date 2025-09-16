# correctness/no-unused-labels

Правило `no-unused-labels` из набора `correctness` контролирует аспект «No Unused Labels». Оно помогает избегать проблем в коде, связанных с требованием «no unused labels», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unused-labels.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unused-labels выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unused labels» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unused-labels сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unused labels» нарушено.
  return false;
}
```
