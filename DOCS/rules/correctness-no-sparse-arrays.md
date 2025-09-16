# correctness/no-sparse-arrays

Правило `no-sparse-arrays` из набора `correctness` контролирует аспект «No Sparse Arrays». Оно помогает избегать проблем в коде, связанных с требованием «no sparse arrays», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-sparse-arrays.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-sparse-arrays выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no sparse arrays» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-sparse-arrays сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no sparse arrays» нарушено.
  return false;
}
```
