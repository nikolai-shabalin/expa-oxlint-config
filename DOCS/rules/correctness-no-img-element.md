# correctness/no-img-element

Правило `no-img-element` из набора `correctness` контролирует аспект «No Img Element». Оно помогает избегать проблем в коде, связанных с требованием «no img element», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-img-element.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-img-element выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no img element» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-img-element сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no img element» нарушено.
  return false;
}
```
