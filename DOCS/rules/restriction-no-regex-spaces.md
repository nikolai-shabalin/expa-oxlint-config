# restriction/no-regex-spaces

Правило `no-regex-spaces` из набора `restriction` контролирует аспект «No Regex Spaces». Оно помогает избегать проблем в коде, связанных с требованием «no regex spaces», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-regex-spaces.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-regex-spaces выполняется.

```js
function examplePassingRestriction() {
  // Требование «no regex spaces» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-regex-spaces сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no regex spaces» нарушено.
  return false;
}
```
