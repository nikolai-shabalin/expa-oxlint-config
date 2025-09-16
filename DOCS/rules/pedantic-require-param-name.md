# pedantic/require-param-name

Правило `require-param-name` из набора `pedantic` контролирует аспект «Require Param Name». Оно помогает избегать проблем в коде, связанных с требованием «require param name», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-param-name.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-param-name выполняется.

```js
function examplePassingPedantic() {
  // Требование «require param name» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-param-name сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require param name» нарушено.
  return false;
}
```
