# correctness/await-thenable

Правило `await-thenable` из набора `correctness` контролирует аспект «Await Thenable». Оно помогает избегать проблем в коде, связанных с требованием «await thenable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/await-thenable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/await-thenable выполняется.

```js
function examplePassingCorrectness() {
  // Требование «await thenable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/await-thenable сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «await thenable» нарушено.
  return false;
}
```
