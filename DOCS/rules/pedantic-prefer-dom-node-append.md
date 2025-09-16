# pedantic/prefer-dom-node-append

Правило `prefer-dom-node-append` из набора `pedantic` контролирует аспект «Prefer Dom Node Append». Оно помогает избегать проблем в коде, связанных с требованием «prefer dom node append», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-dom-node-append.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-dom-node-append выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer dom node append» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-dom-node-append сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer dom node append» нарушено.
  return false;
}
```
