# pedantic/no-object-constructor

Правило `no-object-constructor` из набора `pedantic` контролирует аспект «No Object Constructor». Оно помогает избегать проблем в коде, связанных с требованием «no object constructor», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-object-constructor.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-object-constructor выполняется.

```js
function examplePassingPedantic() {
  // Требование «no object constructor» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-object-constructor сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no object constructor» нарушено.
  return false;
}
```
