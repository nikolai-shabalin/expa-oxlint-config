# correctness/triple-slash-reference

Правило `triple-slash-reference` из набора `correctness` контролирует аспект «Triple Slash Reference». Оно помогает избегать проблем в коде, связанных с требованием «triple slash reference», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/triple-slash-reference.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/triple-slash-reference выполняется.

```js
function examplePassingCorrectness() {
  // Требование «triple slash reference» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/triple-slash-reference сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «triple slash reference» нарушено.
  return false;
}
```
