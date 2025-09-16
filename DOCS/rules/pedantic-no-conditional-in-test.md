# pedantic/no-conditional-in-test

Правило `no-conditional-in-test` из набора `pedantic` контролирует аспект «No Conditional In Test». Оно помогает избегать проблем в коде, связанных с требованием «no conditional in test», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-conditional-in-test.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-conditional-in-test выполняется.

```js
function examplePassingPedantic() {
  // Требование «no conditional in test» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-conditional-in-test сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no conditional in test» нарушено.
  return false;
}
```
