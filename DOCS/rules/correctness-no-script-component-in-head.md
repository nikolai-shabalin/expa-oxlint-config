# correctness/no-script-component-in-head

Правило `no-script-component-in-head` из набора `correctness` контролирует аспект «No Script Component In Head». Оно помогает избегать проблем в коде, связанных с требованием «no script component in head», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-script-component-in-head.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-script-component-in-head выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no script component in head» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-script-component-in-head сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no script component in head» нарушено.
  return false;
}
```
