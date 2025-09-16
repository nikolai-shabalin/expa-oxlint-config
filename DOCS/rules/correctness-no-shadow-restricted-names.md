# correctness/no-shadow-restricted-names

Правило `no-shadow-restricted-names` из набора `correctness` контролирует аспект «No Shadow Restricted Names». Оно помогает избегать проблем в коде, связанных с требованием «no shadow restricted names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-shadow-restricted-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-shadow-restricted-names выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no shadow restricted names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-shadow-restricted-names сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no shadow restricted names» нарушено.
  return false;
}
```
