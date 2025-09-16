# correctness/prefer-tag-over-role

Правило `prefer-tag-over-role` из набора `correctness` контролирует аспект «Prefer Tag Over Role». Оно помогает избегать проблем в коде, связанных с требованием «prefer tag over role», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-tag-over-role.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/prefer-tag-over-role выполняется.

```js
function examplePassingCorrectness() {
  // Требование «prefer tag over role» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/prefer-tag-over-role сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «prefer tag over role» нарушено.
  return false;
}
```
