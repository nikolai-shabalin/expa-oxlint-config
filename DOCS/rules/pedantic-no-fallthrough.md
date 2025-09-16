# pedantic/no-fallthrough

Правило `no-fallthrough` из набора `pedantic` контролирует аспект «No Fallthrough». Оно помогает избегать проблем в коде, связанных с требованием «no fallthrough», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-fallthrough.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-fallthrough выполняется.

```js
function examplePassingPedantic() {
  // Требование «no fallthrough» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-fallthrough сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no fallthrough» нарушено.
  return false;
}
```
