# correctness/forward-ref-uses-ref

Правило `forward-ref-uses-ref` из набора `correctness` контролирует аспект «Forward Ref Uses Ref». Оно помогает избегать проблем в коде, связанных с требованием «forward ref uses ref», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/forward-ref-uses-ref.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/forward-ref-uses-ref выполняется.

```js
function examplePassingCorrectness() {
  // Требование «forward ref uses ref» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/forward-ref-uses-ref сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «forward ref uses ref» нарушено.
  return false;
}
```
