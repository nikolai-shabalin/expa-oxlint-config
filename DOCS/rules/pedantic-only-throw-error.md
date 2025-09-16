# pedantic/only-throw-error

Правило `only-throw-error` из набора `pedantic` контролирует аспект «Only Throw Error». Оно помогает избегать проблем в коде, связанных с требованием «only throw error», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/only-throw-error.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/only-throw-error выполняется.

```js
function examplePassingPedantic() {
  // Требование «only throw error» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/only-throw-error сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «only throw error» нарушено.
  return false;
}
```
