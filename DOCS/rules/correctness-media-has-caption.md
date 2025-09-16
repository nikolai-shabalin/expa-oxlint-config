# correctness/media-has-caption

Правило `media-has-caption` из набора `correctness` контролирует аспект «Media Has Caption». Оно помогает избегать проблем в коде, связанных с требованием «media has caption», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/media-has-caption.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/media-has-caption выполняется.

```js
function examplePassingCorrectness() {
  // Требование «media has caption» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/media-has-caption сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «media has caption» нарушено.
  return false;
}
```
