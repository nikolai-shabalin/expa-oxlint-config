# style/no-restricted-matchers

Правило `no-restricted-matchers` из набора `style` контролирует аспект «No Restricted Matchers». Оно помогает избегать проблем в коде, связанных с требованием «no restricted matchers», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-restricted-matchers.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-restricted-matchers выполняется.

```js
function examplePassingStyle() {
  // Требование «no restricted matchers» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-restricted-matchers сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no restricted matchers» нарушено.
  return false;
}
```
