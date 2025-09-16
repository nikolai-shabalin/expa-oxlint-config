# style/prefer-comparison-matcher

Правило `prefer-comparison-matcher` из набора `style` контролирует аспект «Prefer Comparison Matcher». Оно помогает избегать проблем в коде, связанных с требованием «prefer comparison matcher», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-comparison-matcher.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-comparison-matcher выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer comparison matcher» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-comparison-matcher сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer comparison matcher» нарушено.
  return false;
}
```
