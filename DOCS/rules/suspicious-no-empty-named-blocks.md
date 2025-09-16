# suspicious/no-empty-named-blocks

Правило `no-empty-named-blocks` из набора `suspicious` контролирует аспект «No Empty Named Blocks». Оно помогает избегать проблем в коде, связанных с требованием «no empty named blocks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-named-blocks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-empty-named-blocks выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no empty named blocks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-empty-named-blocks сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no empty named blocks» нарушено.
  return false;
}
```
