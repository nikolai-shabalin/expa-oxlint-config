# style/consistent-type-imports

Правило `consistent-type-imports` из набора `style` контролирует аспект «Consistent Type Imports». Оно помогает избегать проблем в коде, связанных с требованием «consistent type imports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-type-imports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-type-imports выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent type imports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-type-imports сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent type imports» нарушено.
  return false;
}
```
