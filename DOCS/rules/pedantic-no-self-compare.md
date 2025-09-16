# pedantic/no-self-compare

Правило `no-self-compare` из набора `pedantic` контролирует аспект «No Self Compare». Оно помогает избегать проблем в коде, связанных с требованием «no self compare», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-self-compare.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-self-compare выполняется.

```js
function examplePassingPedantic() {
  // Требование «no self compare» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-self-compare сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no self compare» нарушено.
  return false;
}
```
