# suspicious/no-named-as-default

Правило `no-named-as-default` из набора `suspicious` контролирует аспект «No Named As Default». Оно помогает избегать проблем в коде, связанных с требованием «no named as default», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-named-as-default.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-named-as-default выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no named as default» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-named-as-default сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no named as default» нарушено.
  return false;
}
```
