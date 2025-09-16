# pedantic/no-confusing-void-expression

Правило `no-confusing-void-expression` из набора `pedantic` контролирует аспект «No Confusing Void Expression». Оно помогает избегать проблем в коде, связанных с требованием «no confusing void expression», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-confusing-void-expression.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-confusing-void-expression выполняется.

```js
function examplePassingPedantic() {
  // Требование «no confusing void expression» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-confusing-void-expression сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no confusing void expression» нарушено.
  return false;
}
```
