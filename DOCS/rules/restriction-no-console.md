# restriction/no-console

Правило `no-console` из набора `restriction` контролирует аспект «No Console». Оно помогает избегать проблем в коде, связанных с требованием «no console», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-console.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-console выполняется.

```js
function examplePassingRestriction() {
  // Требование «no console» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-console сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no console» нарушено.
  return false;
}
```
