# correctness/no-callback-in-promise

Правило `no-callback-in-promise` из набора `correctness` контролирует аспект «No Callback In Promise». Оно помогает избегать проблем в коде, связанных с требованием «no callback in promise», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-callback-in-promise.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-callback-in-promise выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no callback in promise» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-callback-in-promise сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no callback in promise» нарушено.
  return false;
}
```
