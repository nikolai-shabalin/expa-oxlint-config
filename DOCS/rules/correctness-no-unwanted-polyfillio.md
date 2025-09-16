# correctness/no-unwanted-polyfillio

Правило `no-unwanted-polyfillio` из набора `correctness` контролирует аспект «No Unwanted Polyfillio». Оно помогает избегать проблем в коде, связанных с требованием «no unwanted polyfillio», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unwanted-polyfillio.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unwanted-polyfillio выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unwanted polyfillio» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unwanted-polyfillio сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unwanted polyfillio» нарушено.
  return false;
}
```
