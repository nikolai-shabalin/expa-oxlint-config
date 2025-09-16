# correctness/valid-title

Правило `valid-title` из набора `correctness` контролирует аспект «Valid Title». Оно помогает избегать проблем в коде, связанных с требованием «valid title», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-title.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-title выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid title» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-title сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid title» нарушено.
  return false;
}
```
