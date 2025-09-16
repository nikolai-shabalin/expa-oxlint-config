# style/consistent-type-specifier-style

Правило `consistent-type-specifier-style` из набора `style` контролирует аспект «Consistent Type Specifier Style». Оно помогает избегать проблем в коде, связанных с требованием «consistent type specifier style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-type-specifier-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-type-specifier-style выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent type specifier style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-type-specifier-style сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent type specifier style» нарушено.
  return false;
}
```
