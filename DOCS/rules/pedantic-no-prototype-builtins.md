# pedantic/no-prototype-builtins

Правило `no-prototype-builtins` из набора `pedantic` контролирует аспект «No Prototype Builtins». Оно помогает избегать проблем в коде, связанных с требованием «no prototype builtins», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-prototype-builtins.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-prototype-builtins выполняется.

```js
function examplePassingPedantic() {
  // Требование «no prototype builtins» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-prototype-builtins сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no prototype builtins» нарушено.
  return false;
}
```
