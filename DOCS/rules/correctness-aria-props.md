# correctness/aria-props

Правило `aria-props` из набора `correctness` контролирует аспект «Aria Props». Оно помогает избегать проблем в коде, связанных с требованием «aria props», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/aria-props.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/aria-props выполняется.

```js
function examplePassingCorrectness() {
  // Требование «aria props» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/aria-props сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «aria props» нарушено.
  return false;
}
```
