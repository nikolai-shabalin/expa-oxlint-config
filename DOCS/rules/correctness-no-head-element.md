# correctness/no-head-element

Правило `no-head-element` из набора `correctness` контролирует аспект «No Head Element». Оно помогает избегать проблем в коде, связанных с требованием «no head element», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-head-element.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-head-element выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no head element» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-head-element сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no head element» нарушено.
  return false;
}
```
