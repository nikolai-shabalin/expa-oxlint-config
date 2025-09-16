# correctness/no-export

Правило `no-export` из набора `correctness` контролирует аспект «No Export». Оно помогает избегать проблем в коде, связанных с требованием «no export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-export выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-export сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no export» нарушено.
  return false;
}
```
