# correctness/img-redundant-alt

Правило `img-redundant-alt` из набора `correctness` контролирует аспект «Img Redundant Alt». Оно помогает избегать проблем в коде, связанных с требованием «img redundant alt», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/img-redundant-alt.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/img-redundant-alt выполняется.

```js
function examplePassingCorrectness() {
  // Требование «img redundant alt» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/img-redundant-alt сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «img redundant alt» нарушено.
  return false;
}
```
