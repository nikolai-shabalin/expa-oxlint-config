# correctness/no-unsafe-optional-chaining

Правило `no-unsafe-optional-chaining` из набора `correctness` контролирует аспект «No Unsafe Optional Chaining». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe optional chaining», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-optional-chaining.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unsafe-optional-chaining выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unsafe optional chaining» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unsafe-optional-chaining сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unsafe optional chaining» нарушено.
  return false;
}
```
