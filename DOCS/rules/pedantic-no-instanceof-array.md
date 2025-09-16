# pedantic/no-instanceof-array

Правило `no-instanceof-array` из набора `pedantic` контролирует аспект «No Instanceof Array». Оно помогает избегать проблем в коде, связанных с требованием «no instanceof array», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-instanceof-array.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-instanceof-array выполняется.

```js
function examplePassingPedantic() {
  // Требование «no instanceof array» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-instanceof-array сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no instanceof array» нарушено.
  return false;
}
```
