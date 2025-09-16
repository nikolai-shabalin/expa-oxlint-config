# correctness/no-useless-rename

Правило `no-useless-rename` из набора `correctness` контролирует аспект «No Useless Rename». Оно помогает избегать проблем в коде, связанных с требованием «no useless rename», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-rename.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-rename выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless rename» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-rename сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless rename» нарушено.
  return false;
}
```
