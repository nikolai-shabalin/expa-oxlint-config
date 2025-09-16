# style/prefer-mock-promise-shorthand

Правило `prefer-mock-promise-shorthand` из набора `style` контролирует аспект «Prefer Mock Promise Shorthand». Оно помогает избегать проблем в коде, связанных с требованием «prefer mock promise shorthand», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-mock-promise-shorthand.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-mock-promise-shorthand выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer mock promise shorthand» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-mock-promise-shorthand сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer mock promise shorthand» нарушено.
  return false;
}
```
