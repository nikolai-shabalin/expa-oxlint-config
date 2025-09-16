# restriction/no-empty

Правило `no-empty` из набора `restriction` контролирует аспект «No Empty». Оно помогает избегать проблем в коде, связанных с требованием «no empty», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-empty выполняется.

```js
function examplePassingRestriction() {
  // Требование «no empty» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-empty сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no empty» нарушено.
  return false;
}
```
