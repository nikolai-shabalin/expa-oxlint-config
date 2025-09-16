# correctness/no-danger-with-children

Правило `no-danger-with-children` из набора `correctness` контролирует аспект «No Danger With Children». Оно помогает избегать проблем в коде, связанных с требованием «no danger with children», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-danger-with-children.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-danger-with-children выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no danger with children» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-danger-with-children сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no danger with children» нарушено.
  return false;
}
```
