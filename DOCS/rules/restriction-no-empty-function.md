# restriction/no-empty-function

Правило `no-empty-function` из набора `restriction` контролирует аспект «No Empty Function». Оно помогает избегать проблем в коде, связанных с требованием «no empty function», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-function.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-empty-function выполняется.

```js
function examplePassingRestriction() {
  // Требование «no empty function» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-empty-function сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no empty function» нарушено.
  return false;
}
```
