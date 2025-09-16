# correctness/no-delete-var

Правило `no-delete-var` из набора `correctness` контролирует аспект «No Delete Var». Оно помогает избегать проблем в коде, связанных с требованием «no delete var», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-delete-var.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-delete-var выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no delete var» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-delete-var сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no delete var» нарушено.
  return false;
}
```
