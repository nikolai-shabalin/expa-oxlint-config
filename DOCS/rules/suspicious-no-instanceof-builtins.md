# suspicious/no-instanceof-builtins

Правило `no-instanceof-builtins` из набора `suspicious` контролирует аспект «No Instanceof Builtins». Оно помогает избегать проблем в коде, связанных с требованием «no instanceof builtins», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-instanceof-builtins.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-instanceof-builtins выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no instanceof builtins» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-instanceof-builtins сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no instanceof builtins» нарушено.
  return false;
}
```
