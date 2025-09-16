# correctness/tabindex-no-positive

Правило `tabindex-no-positive` из набора `correctness` контролирует аспект «Tabindex No Positive». Оно помогает избегать проблем в коде, связанных с требованием «tabindex no positive», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/tabindex-no-positive.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/tabindex-no-positive выполняется.

```js
function examplePassingCorrectness() {
  // Требование «tabindex no positive» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/tabindex-no-positive сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «tabindex no positive» нарушено.
  return false;
}
```
