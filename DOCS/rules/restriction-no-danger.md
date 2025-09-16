# restriction/no-danger

Правило `no-danger` из набора `restriction` контролирует аспект «No Danger». Оно помогает избегать проблем в коде, связанных с требованием «no danger», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-danger.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-danger выполняется.

```js
function examplePassingRestriction() {
  // Требование «no danger» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-danger сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no danger» нарушено.
  return false;
}
```
