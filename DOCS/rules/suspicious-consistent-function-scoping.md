# suspicious/consistent-function-scoping

Правило `consistent-function-scoping` из набора `suspicious` контролирует аспект «Consistent Function Scoping». Оно помогает избегать проблем в коде, связанных с требованием «consistent function scoping», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-function-scoping.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/consistent-function-scoping выполняется.

```js
function examplePassingSuspicious() {
  // Требование «consistent function scoping» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/consistent-function-scoping сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «consistent function scoping» нарушено.
  return false;
}
```
