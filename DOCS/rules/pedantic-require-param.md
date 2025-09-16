# pedantic/require-param

Правило `require-param` из набора `pedantic` контролирует аспект «Require Param». Оно помогает избегать проблем в коде, связанных с требованием «require param», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-param.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-param выполняется.

```js
function examplePassingPedantic() {
  // Требование «require param» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-param сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require param» нарушено.
  return false;
}
```
