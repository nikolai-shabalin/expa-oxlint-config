# pedantic/consistent-assert

Правило `consistent-assert` из набора `pedantic` контролирует аспект «Consistent Assert». Оно помогает избегать проблем в коде, связанных с требованием «consistent assert», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-assert.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/consistent-assert выполняется.

```js
function examplePassingPedantic() {
  // Требование «consistent assert» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/consistent-assert сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «consistent assert» нарушено.
  return false;
}
```
