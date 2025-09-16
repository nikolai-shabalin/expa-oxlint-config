# pedantic/no-throw-literal

Правило `no-throw-literal` из набора `pedantic` контролирует аспект «No Throw Literal». Оно помогает избегать проблем в коде, связанных с требованием «no throw literal», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-throw-literal.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-throw-literal выполняется.

```js
function examplePassingPedantic() {
  // Требование «no throw literal» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-throw-literal сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no throw literal» нарушено.
  return false;
}
```
