# style/sort-imports

Правило `sort-imports` из набора `style` контролирует аспект «Sort Imports». Оно помогает избегать проблем в коде, связанных с требованием «sort imports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/sort-imports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/sort-imports выполняется.

```js
function examplePassingStyle() {
  // Требование «sort imports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/sort-imports сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «sort imports» нарушено.
  return false;
}
```
