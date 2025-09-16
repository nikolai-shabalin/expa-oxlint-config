# restriction/prefer-literal-enum-member

Правило `prefer-literal-enum-member` из набора `restriction` контролирует аспект «Prefer Literal Enum Member». Оно помогает избегать проблем в коде, связанных с требованием «prefer literal enum member», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-literal-enum-member.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/prefer-literal-enum-member выполняется.

```js
function examplePassingRestriction() {
  // Требование «prefer literal enum member» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/prefer-literal-enum-member сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «prefer literal enum member» нарушено.
  return false;
}
```
