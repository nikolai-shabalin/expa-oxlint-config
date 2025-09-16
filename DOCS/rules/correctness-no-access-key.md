# correctness/no-access-key

Правило `no-access-key` из набора `correctness` контролирует аспект «No Access Key». Оно помогает избегать проблем в коде, связанных с требованием «no access key», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-access-key.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-access-key выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no access key» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-access-key сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no access key» нарушено.
  return false;
}
```
