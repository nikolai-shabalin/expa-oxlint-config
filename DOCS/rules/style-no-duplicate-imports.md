# style/no-duplicate-imports

Правило `no-duplicate-imports` из набора `style` контролирует аспект «No Duplicate Imports». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate imports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-imports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-duplicate-imports выполняется.

```js
function examplePassingStyle() {
  // Требование «no duplicate imports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-duplicate-imports сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no duplicate imports» нарушено.
  return false;
}
```
