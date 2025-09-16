# style/prefer-namespace-keyword

Правило `prefer-namespace-keyword` из набора `style` контролирует аспект «Prefer Namespace Keyword». Оно помогает избегать проблем в коде, связанных с требованием «prefer namespace keyword», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-namespace-keyword.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-namespace-keyword выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer namespace keyword» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-namespace-keyword сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer namespace keyword» нарушено.
  return false;
}
```
