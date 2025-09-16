# correctness/restrict-template-expressions

Правило `restrict-template-expressions` из набора `correctness` контролирует аспект «Restrict Template Expressions». Оно помогает избегать проблем в коде, связанных с требованием «restrict template expressions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/restrict-template-expressions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/restrict-template-expressions выполняется.

```js
function examplePassingCorrectness() {
  // Требование «restrict template expressions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/restrict-template-expressions сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «restrict template expressions» нарушено.
  return false;
}
```
