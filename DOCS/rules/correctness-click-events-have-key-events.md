# correctness/click-events-have-key-events

Правило `click-events-have-key-events` из набора `correctness` контролирует аспект «Click Events Have Key Events». Оно помогает избегать проблем в коде, связанных с требованием «click events have key events», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/click-events-have-key-events.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/click-events-have-key-events выполняется.

```js
function examplePassingCorrectness() {
  // Требование «click events have key events» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/click-events-have-key-events сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «click events have key events» нарушено.
  return false;
}
```
