# style/consistent-existence-index-check

Правило `consistent-existence-index-check` из набора `style` контролирует аспект «Consistent Existence Index Check». Оно помогает избегать проблем в коде, связанных с требованием «consistent existence index check», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-existence-index-check.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-existence-index-check выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent existence index check» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-existence-index-check сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent existence index check» нарушено.
  return false;
}
```
