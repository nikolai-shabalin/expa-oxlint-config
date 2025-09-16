# correctness/prefer-as-const

Правило `prefer-as-const` из набора `correctness` контролирует аспект «Prefer As Const». Оно помогает избегать проблем в коде, связанных с требованием «prefer as const», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-as-const.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/prefer-as-const выполняется.

```js
function examplePassingCorrectness() {
  // Требование «prefer as const» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/prefer-as-const сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «prefer as const» нарушено.
  return false;
}
```
