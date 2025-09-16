# correctness/bad-array-method-on-arguments

Правило `bad-array-method-on-arguments` из набора `correctness` контролирует аспект «Bad Array Method On Arguments». Оно помогает избегать проблем в коде, связанных с требованием «bad array method on arguments», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-array-method-on-arguments.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-array-method-on-arguments выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad array method on arguments» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-array-method-on-arguments сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad array method on arguments» нарушено.
  return false;
}
```
