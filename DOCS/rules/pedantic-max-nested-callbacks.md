# pedantic/max-nested-callbacks

Правило `max-nested-callbacks` из набора `pedantic` контролирует аспект «Max Nested Callbacks». Оно помогает избегать проблем в коде, связанных с требованием «max nested callbacks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-nested-callbacks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-nested-callbacks выполняется.

```js
function examplePassingPedantic() {
  // Требование «max nested callbacks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-nested-callbacks сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max nested callbacks» нарушено.
  return false;
}
```
