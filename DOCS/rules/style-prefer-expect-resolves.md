# style/prefer-expect-resolves

Правило `prefer-expect-resolves` из набора `style` контролирует аспект «Prefer Expect Resolves». Оно помогает избегать проблем в коде, связанных с требованием «prefer expect resolves», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-expect-resolves.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-expect-resolves выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer expect resolves» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-expect-resolves сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer expect resolves» нарушено.
  return false;
}
```
