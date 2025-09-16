# pedantic/prefer-dom-node-remove

Правило `prefer-dom-node-remove` из набора `pedantic` контролирует аспект «Prefer Dom Node Remove». Оно помогает избегать проблем в коде, связанных с требованием «prefer dom node remove», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-dom-node-remove.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-dom-node-remove выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer dom node remove» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-dom-node-remove сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer dom node remove» нарушено.
  return false;
}
```
