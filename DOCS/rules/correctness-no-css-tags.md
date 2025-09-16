# correctness/no-css-tags

Правило `no-css-tags` из набора `correctness` контролирует аспект «No Css Tags». Оно помогает избегать проблем в коде, связанных с требованием «no css tags», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-css-tags.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-css-tags выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no css tags» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-css-tags сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no css tags» нарушено.
  return false;
}
```
