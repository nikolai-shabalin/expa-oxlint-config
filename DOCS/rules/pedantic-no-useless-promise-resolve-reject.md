# pedantic/no-useless-promise-resolve-reject

Правило `no-useless-promise-resolve-reject` из набора `pedantic` контролирует аспект «No Useless Promise Resolve Reject». Оно помогает избегать проблем в коде, связанных с требованием «no useless promise resolve reject», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-promise-resolve-reject.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-useless-promise-resolve-reject выполняется.

```js
function examplePassingPedantic() {
  // Требование «no useless promise resolve reject» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-useless-promise-resolve-reject сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no useless promise resolve reject» нарушено.
  return false;
}
```
