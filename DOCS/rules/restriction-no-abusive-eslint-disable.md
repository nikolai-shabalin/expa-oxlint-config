# restriction/no-abusive-eslint-disable

Правило `no-abusive-eslint-disable` из набора `restriction` контролирует аспект «No Abusive Eslint Disable». Оно помогает избегать проблем в коде, связанных с требованием «no abusive eslint disable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-abusive-eslint-disable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-abusive-eslint-disable выполняется.

```js
function examplePassingRestriction() {
  // Требование «no abusive eslint disable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-abusive-eslint-disable сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no abusive eslint disable» нарушено.
  return false;
}
```
