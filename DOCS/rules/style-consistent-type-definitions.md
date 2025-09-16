# style/consistent-type-definitions

Правило `consistent-type-definitions` из набора `style` контролирует аспект «Consistent Type Definitions». Оно помогает избегать проблем в коде, связанных с требованием «consistent type definitions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-type-definitions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-type-definitions выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent type definitions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-type-definitions сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent type definitions» нарушено.
  return false;
}
```
