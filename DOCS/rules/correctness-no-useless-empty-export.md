# correctness/no-useless-empty-export

Правило `no-useless-empty-export` из набора `correctness` контролирует аспект «No Useless Empty Export». Оно помогает избегать проблем в коде, связанных с требованием «no useless empty export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-empty-export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-useless-empty-export выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no useless empty export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-useless-empty-export сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no useless empty export» нарушено.
  return false;
}
```
