# correctness/for-direction

Правило `for-direction` из набора `correctness` контролирует аспект «For Direction». Оно помогает избегать проблем в коде, связанных с требованием «for direction», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/for-direction.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/for-direction выполняется.

```js
function examplePassingCorrectness() {
  // Требование «for direction» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/for-direction сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «for direction» нарушено.
  return false;
}
```
