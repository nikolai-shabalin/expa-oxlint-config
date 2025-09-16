# correctness/no-irregular-whitespace

Правило `no-irregular-whitespace` из набора `correctness` контролирует аспект «No Irregular Whitespace». Оно помогает избегать проблем в коде, связанных с требованием «no irregular whitespace», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-irregular-whitespace.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-irregular-whitespace выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no irregular whitespace» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-irregular-whitespace сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no irregular whitespace» нарушено.
  return false;
}
```
