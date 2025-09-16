# pedantic/no-typeof-undefined

Правило `no-typeof-undefined` из набора `pedantic` контролирует аспект «No Typeof Undefined». Оно помогает избегать проблем в коде, связанных с требованием «no typeof undefined», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-typeof-undefined.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-typeof-undefined выполняется.

```js
function examplePassingPedantic() {
  // Требование «no typeof undefined» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-typeof-undefined сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no typeof undefined» нарушено.
  return false;
}
```
