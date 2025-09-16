# correctness/no-duplicate-type-constituents

Правило `no-duplicate-type-constituents` из набора `correctness` контролирует аспект «No Duplicate Type Constituents». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate type constituents», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-type-constituents.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-duplicate-type-constituents выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no duplicate type constituents» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-duplicate-type-constituents сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no duplicate type constituents» нарушено.
  return false;
}
```
