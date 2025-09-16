# restriction/anchor-ambiguous-text

Правило `anchor-ambiguous-text` из набора `restriction` контролирует аспект «Anchor Ambiguous Text». Оно помогает избегать проблем в коде, связанных с требованием «anchor ambiguous text», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/anchor-ambiguous-text.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/anchor-ambiguous-text выполняется.

```js
function examplePassingRestriction() {
  // Требование «anchor ambiguous text» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/anchor-ambiguous-text сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «anchor ambiguous text» нарушено.
  return false;
}
```
