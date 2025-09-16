# correctness/exhaustive-deps

Правило `exhaustive-deps` из набора `correctness` контролирует аспект «Exhaustive Deps». Оно помогает избегать проблем в коде, связанных с требованием «exhaustive deps», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/exhaustive-deps.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/exhaustive-deps выполняется.

```js
function examplePassingCorrectness() {
  // Требование «exhaustive deps» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/exhaustive-deps сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «exhaustive deps» нарушено.
  return false;
}
```
