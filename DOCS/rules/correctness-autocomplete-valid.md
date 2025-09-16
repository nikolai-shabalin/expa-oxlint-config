# correctness/autocomplete-valid

Правило `autocomplete-valid` из набора `correctness` контролирует аспект «Autocomplete Valid». Оно помогает избегать проблем в коде, связанных с требованием «autocomplete valid», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/autocomplete-valid.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/autocomplete-valid выполняется.

```js
function examplePassingCorrectness() {
  // Требование «autocomplete valid» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/autocomplete-valid сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «autocomplete valid» нарушено.
  return false;
}
```
