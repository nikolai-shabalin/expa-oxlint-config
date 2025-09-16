# pedantic/no-new-buffer

Правило `no-new-buffer` из набора `pedantic` контролирует аспект «No New Buffer». Оно помогает избегать проблем в коде, связанных с требованием «no new buffer», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-buffer.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-new-buffer выполняется.

```js
function examplePassingPedantic() {
  // Требование «no new buffer» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-new-buffer сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no new buffer» нарушено.
  return false;
}
```
