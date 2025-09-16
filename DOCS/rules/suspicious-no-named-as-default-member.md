# suspicious/no-named-as-default-member

Правило `no-named-as-default-member` из набора `suspicious` контролирует аспект «No Named As Default Member». Оно помогает избегать проблем в коде, связанных с требованием «no named as default member», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-named-as-default-member.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-named-as-default-member выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no named as default member» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-named-as-default-member сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no named as default member» нарушено.
  return false;
}
```
