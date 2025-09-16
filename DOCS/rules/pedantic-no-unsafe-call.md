# pedantic/no-unsafe-call

Правило `no-unsafe-call` из набора `pedantic` контролирует аспект «No Unsafe Call». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe call», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-call.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-call выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe call» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-call сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe call» нарушено.
  return false;
}
```
