# correctness/implements-on-classes

Правило `implements-on-classes` из набора `correctness` контролирует аспект «Implements On Classes». Оно помогает избегать проблем в коде, связанных с требованием «implements on classes», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/implements-on-classes.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/implements-on-classes выполняется.

```js
function examplePassingCorrectness() {
  // Требование «implements on classes» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/implements-on-classes сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «implements on classes» нарушено.
  return false;
}
```
