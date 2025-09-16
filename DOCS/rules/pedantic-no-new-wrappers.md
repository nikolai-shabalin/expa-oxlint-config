# pedantic/no-new-wrappers

Правило `no-new-wrappers` из набора `pedantic` контролирует аспект «No New Wrappers». Оно помогает избегать проблем в коде, связанных с требованием «no new wrappers», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-wrappers.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-new-wrappers выполняется.

```js
function examplePassingPedantic() {
  // Требование «no new wrappers» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-new-wrappers сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no new wrappers» нарушено.
  return false;
}
```
