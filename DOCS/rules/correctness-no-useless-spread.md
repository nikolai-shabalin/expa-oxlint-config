# correctness/no-useless-spread

Правило `no-useless-spread` из набора `correctness` контролирует аспект «No Useless Spread». Оно помогает избегать проблем в коде, связанных с требованием «no useless spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-spread выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-spread сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless spread» нарушено.
  return false;
}
```
