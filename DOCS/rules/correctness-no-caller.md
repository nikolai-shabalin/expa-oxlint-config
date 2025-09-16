# correctness/no-caller

Правило `no-caller` из набора `correctness` контролирует аспект «No Caller». Оно помогает избегать проблем в коде, связанных с требованием «no caller», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-caller.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-caller выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no caller» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-caller сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no caller» нарушено.
  return false;
}
```
