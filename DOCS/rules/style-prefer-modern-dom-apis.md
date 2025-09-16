# style/prefer-modern-dom-apis

Правило `prefer-modern-dom-apis` из набора `style` контролирует аспект «Prefer Modern Dom Apis». Оно помогает избегать проблем в коде, связанных с требованием «prefer modern dom apis», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-modern-dom-apis.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-modern-dom-apis выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer modern dom apis» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-modern-dom-apis сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer modern dom apis» нарушено.
  return false;
}
```
