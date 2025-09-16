# style/prefer-lowercase-title

Правило `prefer-lowercase-title` из набора `style` контролирует аспект «Prefer Lowercase Title». Оно помогает избегать проблем в коде, связанных с требованием «prefer lowercase title», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-lowercase-title.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-lowercase-title выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer lowercase title» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-lowercase-title сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer lowercase title» нарушено.
  return false;
}
```
