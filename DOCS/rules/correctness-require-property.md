# correctness/require-property

Правило `require-property` из набора `correctness` контролирует аспект «Require Property». Оно помогает избегать проблем в коде, связанных с требованием «require property», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-property.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/require-property выполняется.

```js
function examplePassingCorrectness() {
  // Требование «require property» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/require-property сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «require property» нарушено.
  return false;
}
```
