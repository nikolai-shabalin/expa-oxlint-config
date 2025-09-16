# correctness/only-used-in-recursion

Правило `only-used-in-recursion` из набора `correctness` контролирует аспект «Only Used In Recursion». Оно помогает избегать проблем в коде, связанных с требованием «only used in recursion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/only-used-in-recursion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/only-used-in-recursion выполняется.

```js
function examplePassingCorrectness() {
  // Требование «only used in recursion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/only-used-in-recursion сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «only used in recursion» нарушено.
  return false;
}
```
