# correctness/no-unsafe-finally

Правило `no-unsafe-finally` из набора `correctness` контролирует аспект «No Unsafe Finally». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe finally», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-finally.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unsafe-finally выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unsafe finally» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unsafe-finally сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unsafe finally» нарушено.
  return false;
}
```
