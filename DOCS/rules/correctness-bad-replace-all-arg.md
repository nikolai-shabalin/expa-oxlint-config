# correctness/bad-replace-all-arg

Правило `bad-replace-all-arg` из набора `correctness` контролирует аспект «Bad Replace All Arg». Оно помогает избегать проблем в коде, связанных с требованием «bad replace all arg», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-replace-all-arg.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-replace-all-arg выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad replace all arg» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-replace-all-arg сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad replace all arg» нарушено.
  return false;
}
```
