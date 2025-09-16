# restriction/no-var-requires

Правило `no-var-requires` из набора `restriction` контролирует аспект «No Var Requires». Оно помогает избегать проблем в коде, связанных с требованием «no var requires», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-var-requires.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-var-requires выполняется.

```js
function examplePassingRestriction() {
  // Требование «no var requires» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-var-requires сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no var requires» нарушено.
  return false;
}
```
