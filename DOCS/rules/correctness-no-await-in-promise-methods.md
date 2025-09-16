# correctness/no-await-in-promise-methods

Правило `no-await-in-promise-methods` из набора `correctness` контролирует аспект «No Await In Promise Methods». Оно помогает избегать проблем в коде, связанных с требованием «no await in promise methods», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-await-in-promise-methods.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-await-in-promise-methods выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no await in promise methods» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-await-in-promise-methods сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no await in promise methods» нарушено.
  return false;
}
```
