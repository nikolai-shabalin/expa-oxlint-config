# correctness/no-floating-promises

Правило `no-floating-promises` из набора `correctness` контролирует аспект «No Floating Promises». Оно помогает избегать проблем в коде, связанных с требованием «no floating promises», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-floating-promises.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-floating-promises выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no floating promises» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-floating-promises сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no floating promises» нарушено.
  return false;
}
```
