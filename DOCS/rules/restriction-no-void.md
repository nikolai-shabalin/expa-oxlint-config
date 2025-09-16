# restriction/no-void

Правило `no-void` из набора `restriction` контролирует аспект «No Void». Оно помогает избегать проблем в коде, связанных с требованием «no void», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-void.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-void выполняется.

```js
function examplePassingRestriction() {
  // Требование «no void» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-void сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no void» нарушено.
  return false;
}
```
