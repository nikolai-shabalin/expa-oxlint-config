# correctness/aria-role

Правило `aria-role` из набора `correctness` контролирует аспект «Aria Role». Оно помогает избегать проблем в коде, связанных с требованием «aria role», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/aria-role.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/aria-role выполняется.

```js
function examplePassingCorrectness() {
  // Требование «aria role» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/aria-role сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «aria role» нарушено.
  return false;
}
```
