# correctness/no-thenable

Правило `no-thenable` из набора `correctness` контролирует аспект «No Thenable». Оно помогает избегать проблем в коде, связанных с требованием «no thenable», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-thenable.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-thenable выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no thenable» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-thenable сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no thenable» нарушено.
  return false;
}
```
