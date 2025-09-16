# style/prefer-negative-index

Правило `prefer-negative-index` из набора `style` контролирует аспект «Prefer Negative Index». Оно помогает избегать проблем в коде, связанных с требованием «prefer negative index», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-negative-index.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-negative-index выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer negative index» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-negative-index сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer negative index» нарушено.
  return false;
}
```
