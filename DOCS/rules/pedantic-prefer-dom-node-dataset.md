# pedantic/prefer-dom-node-dataset

Правило `prefer-dom-node-dataset` из набора `pedantic` контролирует аспект «Prefer Dom Node Dataset». Оно помогает избегать проблем в коде, связанных с требованием «prefer dom node dataset», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-dom-node-dataset.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-dom-node-dataset выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer dom node dataset» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-dom-node-dataset сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer dom node dataset» нарушено.
  return false;
}
```
