# correctness/no-obj-calls

Правило `no-obj-calls` из набора `correctness` контролирует аспект «No Obj Calls». Оно помогает избегать проблем в коде, связанных с требованием «no obj calls», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-obj-calls.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-obj-calls выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no obj calls» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-obj-calls сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no obj calls» нарушено.
  return false;
}
```
