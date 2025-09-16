# restriction/no-proto

Правило `no-proto` из набора `restriction` контролирует аспект «No Proto». Оно помогает избегать проблем в коде, связанных с требованием «no proto», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-proto.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-proto выполняется.

```js
function examplePassingRestriction() {
  // Требование «no proto» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-proto сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no proto» нарушено.
  return false;
}
```
