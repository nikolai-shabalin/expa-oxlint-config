# pedantic/max-lines

Правило `max-lines` из набора `pedantic` контролирует аспект «Max Lines». Оно помогает избегать проблем в коде, связанных с требованием «max lines», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-lines.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-lines выполняется.

```js
function examplePassingPedantic() {
  // Требование «max lines» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-lines сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max lines» нарушено.
  return false;
}
```
