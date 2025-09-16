# restriction/default-case

Правило `default-case` из набора `restriction` контролирует аспект «Default Case». Оно помогает избегать проблем в коде, связанных с требованием «default case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/default-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/default-case выполняется.

```js
function examplePassingRestriction() {
  // Требование «default case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/default-case сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «default case» нарушено.
  return false;
}
```
