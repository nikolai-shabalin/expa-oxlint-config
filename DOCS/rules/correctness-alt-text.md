# correctness/alt-text

Правило `alt-text` из набора `correctness` контролирует аспект «Alt Text». Оно помогает избегать проблем в коде, связанных с требованием «alt text», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/alt-text.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/alt-text выполняется.

```js
function examplePassingCorrectness() {
  // Требование «alt text» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/alt-text сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «alt text» нарушено.
  return false;
}
```
