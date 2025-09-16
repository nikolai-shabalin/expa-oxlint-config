# correctness/no-string-refs

Правило `no-string-refs` из набора `correctness` контролирует аспект «No String Refs». Оно помогает избегать проблем в коде, связанных с требованием «no string refs», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-string-refs.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-string-refs выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no string refs» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-string-refs сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no string refs» нарушено.
  return false;
}
```
