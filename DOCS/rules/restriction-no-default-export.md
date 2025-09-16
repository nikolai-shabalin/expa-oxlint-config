# restriction/no-default-export

Правило `no-default-export` из набора `restriction` контролирует аспект «No Default Export». Оно помогает избегать проблем в коде, связанных с требованием «no default export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-default-export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-default-export выполняется.

```js
function examplePassingRestriction() {
  // Требование «no default export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-default-export сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no default export» нарушено.
  return false;
}
```
