# pedantic/no-unnecessary-array-flat-depth

Правило `no-unnecessary-array-flat-depth` из набора `pedantic` контролирует аспект «No Unnecessary Array Flat Depth». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary array flat depth», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-array-flat-depth.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unnecessary-array-flat-depth выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unnecessary array flat depth» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unnecessary-array-flat-depth сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unnecessary array flat depth» нарушено.
  return false;
}
```
