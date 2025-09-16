# pedantic/no-unsafe-return

Правило `no-unsafe-return` из набора `pedantic` контролирует аспект «No Unsafe Return». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-return выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-return сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe return» нарушено.
  return false;
}
```
