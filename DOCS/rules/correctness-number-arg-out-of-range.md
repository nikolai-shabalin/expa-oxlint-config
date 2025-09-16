# correctness/number-arg-out-of-range

Правило `number-arg-out-of-range` из набора `correctness` контролирует аспект «Number Arg Out Of Range». Оно помогает избегать проблем в коде, связанных с требованием «number arg out of range», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/number-arg-out-of-range.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/number-arg-out-of-range выполняется.

```js
function examplePassingCorrectness() {
  // Требование «number arg out of range» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/number-arg-out-of-range сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «number arg out of range» нарушено.
  return false;
}
```
