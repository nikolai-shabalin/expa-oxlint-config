# suspicious/no-self-import

Правило `no-self-import` из набора `suspicious` контролирует аспект «No Self Import». Оно помогает избегать проблем в коде, связанных с требованием «no self import», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-self-import.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-self-import выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no self import» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-self-import сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no self import» нарушено.
  return false;
}
```
