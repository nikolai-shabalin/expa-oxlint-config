# correctness/no-base-to-string

Правило `no-base-to-string` из набора `correctness` контролирует аспект «No Base To String». Оно помогает избегать проблем в коде, связанных с требованием «no base to string», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-base-to-string.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-base-to-string выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no base to string» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-base-to-string сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no base to string» нарушено.
  return false;
}
```
