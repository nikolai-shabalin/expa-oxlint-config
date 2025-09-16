# correctness/no-unsafe-negation

Правило `no-unsafe-negation` из набора `correctness` контролирует аспект «No Unsafe Negation». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe negation», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-negation.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unsafe-negation выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unsafe negation» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unsafe-negation сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unsafe negation» нарушено.
  return false;
}
```
