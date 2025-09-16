# pedantic/no-array-constructor

Правило `no-array-constructor` из набора `pedantic` контролирует аспект «No Array Constructor». Оно помогает избегать проблем в коде, связанных с требованием «no array constructor», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-constructor.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-array-constructor выполняется.

```js
function examplePassingPedantic() {
  // Требование «no array constructor» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-array-constructor сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no array constructor» нарушено.
  return false;
}
```
