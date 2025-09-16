# correctness/no-defaults

Правило `no-defaults` из набора `correctness` контролирует аспект «No Defaults». Оно помогает избегать проблем в коде, связанных с требованием «no defaults», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-defaults.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-defaults выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no defaults» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-defaults сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no defaults» нарушено.
  return false;
}
```
