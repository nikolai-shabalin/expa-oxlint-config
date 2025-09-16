# pedantic/no-unreadable-iife

Правило `no-unreadable-iife` из набора `pedantic` контролирует аспект «No Unreadable Iife». Оно помогает избегать проблем в коде, связанных с требованием «no unreadable iife», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unreadable-iife.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unreadable-iife выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unreadable iife» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unreadable-iife сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unreadable iife» нарушено.
  return false;
}
```
