# style/prefer-equality-matcher

Правило `prefer-equality-matcher` из набора `style` контролирует аспект «Prefer Equality Matcher». Оно помогает избегать проблем в коде, связанных с требованием «prefer equality matcher», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-equality-matcher.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-equality-matcher выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer equality matcher» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-equality-matcher сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer equality matcher» нарушено.
  return false;
}
```
