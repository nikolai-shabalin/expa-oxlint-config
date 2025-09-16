# correctness/no-debugger

Правило `no-debugger` из набора `correctness` контролирует аспект «No Debugger». Оно помогает избегать проблем в коде, связанных с требованием «no debugger», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-debugger.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-debugger выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no debugger» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-debugger сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no debugger» нарушено.
  return false;
}
```
