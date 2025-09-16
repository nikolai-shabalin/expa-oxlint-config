# suspicious/always-return

Правило `always-return` из набора `suspicious` контролирует аспект «Always Return». Оно помогает избегать проблем в коде, связанных с требованием «always return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/always-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/always-return выполняется.

```js
function examplePassingSuspicious() {
  // Требование «always return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/always-return сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «always return» нарушено.
  return false;
}
```
