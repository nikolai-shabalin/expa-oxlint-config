# correctness/no-for-in-array

Правило `no-for-in-array` из набора `correctness` контролирует аспект «No For In Array». Оно помогает избегать проблем в коде, связанных с требованием «no for in array», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-for-in-array.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-for-in-array выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no for in array» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-for-in-array сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no for in array» нарушено.
  return false;
}
```
