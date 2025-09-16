# pedantic/no-hex-escape

Правило `no-hex-escape` из набора `pedantic` контролирует аспект «No Hex Escape». Оно помогает избегать проблем в коде, связанных с требованием «no hex escape», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-hex-escape.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-hex-escape выполняется.

```js
function examplePassingPedantic() {
  // Требование «no hex escape» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-hex-escape сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no hex escape» нарушено.
  return false;
}
```
