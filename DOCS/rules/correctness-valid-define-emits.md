# correctness/valid-define-emits

Правило `valid-define-emits` из набора `correctness` контролирует аспект «Valid Define Emits». Оно помогает избегать проблем в коде, связанных с требованием «valid define emits», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-define-emits.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-define-emits выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid define emits» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-define-emits сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid define emits» нарушено.
  return false;
}
```
