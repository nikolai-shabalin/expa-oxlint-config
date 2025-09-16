# correctness/no-autofocus

Правило `no-autofocus` из набора `correctness` контролирует аспект «No Autofocus». Оно помогает избегать проблем в коде, связанных с требованием «no autofocus», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-autofocus.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-autofocus выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no autofocus» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-autofocus сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no autofocus» нарушено.
  return false;
}
```
