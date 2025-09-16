# restriction/no-div-regex

Правило `no-div-regex` из набора `restriction` контролирует аспект «No Div Regex». Оно помогает избегать проблем в коде, связанных с требованием «no div regex», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-div-regex.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-div-regex выполняется.

```js
function examplePassingRestriction() {
  // Требование «no div regex» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-div-regex сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no div regex» нарушено.
  return false;
}
```
