# correctness/valid-typeof

Правило `valid-typeof` из набора `correctness` контролирует аспект «Valid Typeof». Оно помогает избегать проблем в коде, связанных с требованием «valid typeof», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-typeof.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-typeof выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid typeof» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-typeof сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid typeof» нарушено.
  return false;
}
```
