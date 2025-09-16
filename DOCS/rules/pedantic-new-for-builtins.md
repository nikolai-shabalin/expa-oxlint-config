# pedantic/new-for-builtins

Правило `new-for-builtins` из набора `pedantic` контролирует аспект «New For Builtins». Оно помогает избегать проблем в коде, связанных с требованием «new for builtins», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/new-for-builtins.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/new-for-builtins выполняется.

```js
function examplePassingPedantic() {
  // Требование «new for builtins» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/new-for-builtins сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «new for builtins» нарушено.
  return false;
}
```
