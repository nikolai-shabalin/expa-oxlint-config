# correctness/label-has-associated-control

Правило `label-has-associated-control` из набора `correctness` контролирует аспект «Label Has Associated Control». Оно помогает избегать проблем в коде, связанных с требованием «label has associated control», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/label-has-associated-control.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/label-has-associated-control выполняется.

```js
function examplePassingCorrectness() {
  // Требование «label has associated control» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/label-has-associated-control сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «label has associated control» нарушено.
  return false;
}
```
