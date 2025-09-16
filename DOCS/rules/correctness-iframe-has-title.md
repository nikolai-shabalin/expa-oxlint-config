# correctness/iframe-has-title

Правило `iframe-has-title` из набора `correctness` контролирует аспект «Iframe Has Title». Оно помогает избегать проблем в коде, связанных с требованием «iframe has title», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/iframe-has-title.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/iframe-has-title выполняется.

```js
function examplePassingCorrectness() {
  // Требование «iframe has title» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/iframe-has-title сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «iframe has title» нарушено.
  return false;
}
```
