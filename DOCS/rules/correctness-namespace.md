# correctness/namespace

Правило `namespace` из набора `correctness` контролирует аспект «Namespace». Оно помогает избегать проблем в коде, связанных с требованием «namespace», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/namespace.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/namespace выполняется.

```js
function examplePassingCorrectness() {
  // Требование «namespace» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/namespace сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «namespace» нарушено.
  return false;
}
```
