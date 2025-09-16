# style/consistent-indexed-object-style

Правило `consistent-indexed-object-style` из набора `style` контролирует аспект «Consistent Indexed Object Style». Оно помогает избегать проблем в коде, связанных с требованием «consistent indexed object style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-indexed-object-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-indexed-object-style выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent indexed object style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-indexed-object-style сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent indexed object style» нарушено.
  return false;
}
```
