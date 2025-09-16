# correctness/no-new-statics

Правило `no-new-statics` из набора `correctness` контролирует аспект «No New Statics». Оно помогает избегать проблем в коде, связанных с требованием «no new statics», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-statics.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-new-statics выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no new statics» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-new-statics сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no new statics» нарушено.
  return false;
}
```
