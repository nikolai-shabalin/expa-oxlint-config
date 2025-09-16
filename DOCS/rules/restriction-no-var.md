# restriction/no-var

Правило `no-var` из набора `restriction` контролирует аспект «No Var». Оно помогает избегать проблем в коде, связанных с требованием «no var», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-var.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-var выполняется.

```js
function examplePassingRestriction() {
  // Требование «no var» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-var сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no var» нарушено.
  return false;
}
```
