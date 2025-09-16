# style/prefer-dom-node-text-content

Правило `prefer-dom-node-text-content` из набора `style` контролирует аспект «Prefer Dom Node Text Content». Оно помогает избегать проблем в коде, связанных с требованием «prefer dom node text content», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-dom-node-text-content.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-dom-node-text-content выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer dom node text content» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-dom-node-text-content сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer dom node text content» нарушено.
  return false;
}
```
