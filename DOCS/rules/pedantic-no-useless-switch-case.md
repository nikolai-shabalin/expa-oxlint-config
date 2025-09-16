# pedantic/no-useless-switch-case

Правило `no-useless-switch-case` из набора `pedantic` контролирует аспект «No Useless Switch Case». Оно помогает избегать проблем в коде, связанных с требованием «no useless switch case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-switch-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-useless-switch-case выполняется.

```js
function examplePassingPedantic() {
  // Требование «no useless switch case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-useless-switch-case сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no useless switch case» нарушено.
  return false;
}
```
