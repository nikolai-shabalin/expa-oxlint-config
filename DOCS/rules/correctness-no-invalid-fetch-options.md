# correctness/no-invalid-fetch-options

Правило `no-invalid-fetch-options` из набора `correctness` контролирует аспект «No Invalid Fetch Options». Оно помогает избегать проблем в коде, связанных с требованием «no invalid fetch options», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-invalid-fetch-options.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-invalid-fetch-options выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no invalid fetch options» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-invalid-fetch-options сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no invalid fetch options» нарушено.
  return false;
}
```
