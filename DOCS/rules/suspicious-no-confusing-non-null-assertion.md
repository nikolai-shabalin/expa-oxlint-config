# suspicious/no-confusing-non-null-assertion

Правило `no-confusing-non-null-assertion` из набора `suspicious` контролирует аспект «No Confusing Non Null Assertion». Оно помогает избегать проблем в коде, связанных с требованием «no confusing non null assertion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-confusing-non-null-assertion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-confusing-non-null-assertion выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no confusing non null assertion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-confusing-non-null-assertion сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no confusing non null assertion» нарушено.
  return false;
}
```
