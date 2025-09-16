# correctness/no-distracting-elements

Правило `no-distracting-elements` из набора `correctness` контролирует аспект «No Distracting Elements». Оно помогает избегать проблем в коде, связанных с требованием «no distracting elements», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-distracting-elements.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-distracting-elements выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no distracting elements» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-distracting-elements сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no distracting elements» нарушено.
  return false;
}
```
