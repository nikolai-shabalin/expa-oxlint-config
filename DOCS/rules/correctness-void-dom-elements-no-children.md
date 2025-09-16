# correctness/void-dom-elements-no-children

Правило `void-dom-elements-no-children` из набора `correctness` контролирует аспект «Void Dom Elements No Children». Оно помогает избегать проблем в коде, связанных с требованием «void dom elements no children», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/void-dom-elements-no-children.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/void-dom-elements-no-children выполняется.

```js
function examplePassingCorrectness() {
  // Требование «void dom elements no children» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/void-dom-elements-no-children сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «void dom elements no children» нарушено.
  return false;
}
```
