# correctness/no-new-array

Правило `no-new-array` из набора `correctness` контролирует аспект «No New Array». Оно помогает избегать проблем в коде, связанных с требованием «no new array», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-array.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-new-array выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no new array» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-new-array сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no new array» нарушено.
  return false;
}
```
