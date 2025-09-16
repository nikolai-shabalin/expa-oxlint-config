# suspicious/no-commented-out-tests

Правило `no-commented-out-tests` из набора `suspicious` контролирует аспект «No Commented Out Tests». Оно помогает избегать проблем в коде, связанных с требованием «no commented out tests», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-commented-out-tests.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-commented-out-tests выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no commented out tests» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-commented-out-tests сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no commented out tests» нарушено.
  return false;
}
```
