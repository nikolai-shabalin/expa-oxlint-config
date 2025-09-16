# style/no-test-prefixes

Правило `no-test-prefixes` из набора `style` контролирует аспект «No Test Prefixes». Оно помогает избегать проблем в коде, связанных с требованием «no test prefixes», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-test-prefixes.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-test-prefixes выполняется.

```js
function examplePassingStyle() {
  // Требование «no test prefixes» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-test-prefixes сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no test prefixes» нарушено.
  return false;
}
```
