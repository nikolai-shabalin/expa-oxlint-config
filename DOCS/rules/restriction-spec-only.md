# restriction/spec-only

Правило `spec-only` из набора `restriction` контролирует аспект «Spec Only». Оно помогает избегать проблем в коде, связанных с требованием «spec only», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/spec-only.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/spec-only выполняется.

```js
function examplePassingRestriction() {
  // Требование «spec only» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/spec-only сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «spec only» нарушено.
  return false;
}
```
