# correctness/no-redundant-type-constituents

Правило `no-redundant-type-constituents` из набора `correctness` контролирует аспект «No Redundant Type Constituents». Оно помогает избегать проблем в коде, связанных с требованием «no redundant type constituents», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-redundant-type-constituents.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-redundant-type-constituents выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no redundant type constituents» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-redundant-type-constituents сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no redundant type constituents» нарушено.
  return false;
}
```
