# correctness/valid-define-props

Правило `valid-define-props` из набора `correctness` контролирует аспект «Valid Define Props». Оно помогает избегать проблем в коде, связанных с требованием «valid define props», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/valid-define-props.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/valid-define-props выполняется.

```js
function examplePassingCorrectness() {
  // Требование «valid define props» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/valid-define-props сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «valid define props» нарушено.
  return false;
}
```
