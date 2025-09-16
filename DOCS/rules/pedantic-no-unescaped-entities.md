# pedantic/no-unescaped-entities

Правило `no-unescaped-entities` из набора `pedantic` контролирует аспект «No Unescaped Entities». Оно помогает избегать проблем в коде, связанных с требованием «no unescaped entities», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unescaped-entities.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unescaped-entities выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unescaped entities» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unescaped-entities сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unescaped entities» нарушено.
  return false;
}
```
