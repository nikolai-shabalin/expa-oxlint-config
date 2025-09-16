# correctness/no-empty-file

Правило `no-empty-file` из набора `correctness` контролирует аспект «No Empty File». Оно помогает избегать проблем в коде, связанных с требованием «no empty file», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-file.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-empty-file выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no empty file» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-empty-file сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no empty file» нарушено.
  return false;
}
```
