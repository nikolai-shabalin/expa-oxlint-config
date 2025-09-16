# restriction/no-rest-spread-properties

Правило `no-rest-spread-properties` из набора `restriction` контролирует аспект «No Rest Spread Properties». Оно помогает избегать проблем в коде, связанных с требованием «no rest spread properties», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-rest-spread-properties.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-rest-spread-properties выполняется.

```js
function examplePassingRestriction() {
  // Требование «no rest spread properties» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-rest-spread-properties сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no rest spread properties» нарушено.
  return false;
}
```
