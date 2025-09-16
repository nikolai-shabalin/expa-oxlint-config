# style/no-restricted-jest-methods

Правило `no-restricted-jest-methods` из набора `style` контролирует аспект «No Restricted Jest Methods». Оно помогает избегать проблем в коде, связанных с требованием «no restricted jest methods», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-restricted-jest-methods.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-restricted-jest-methods выполняется.

```js
function examplePassingStyle() {
  // Требование «no restricted jest methods» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-restricted-jest-methods сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no restricted jest methods» нарушено.
  return false;
}
```
