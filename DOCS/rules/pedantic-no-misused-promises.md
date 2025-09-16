# pedantic/no-misused-promises

Правило `no-misused-promises` из набора `pedantic` контролирует аспект «No Misused Promises». Оно помогает избегать проблем в коде, связанных с требованием «no misused promises», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-misused-promises.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-misused-promises выполняется.

```js
function examplePassingPedantic() {
  // Требование «no misused promises» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-misused-promises сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no misused promises» нарушено.
  return false;
}
```
