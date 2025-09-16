# correctness/no-find-dom-node

Правило `no-find-dom-node` из набора `correctness` контролирует аспект «No Find Dom Node». Оно помогает избегать проблем в коде, связанных с требованием «no find dom node», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-find-dom-node.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-find-dom-node выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no find dom node» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-find-dom-node сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no find dom node» нарушено.
  return false;
}
```
