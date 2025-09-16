# correctness/no-self-assign

Правило `no-self-assign` из набора `correctness` контролирует аспект «No Self Assign». Оно помогает избегать проблем в коде, связанных с требованием «no self assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-self-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-self-assign выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no self assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-self-assign сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no self assign» нарушено.
  return false;
}
```
