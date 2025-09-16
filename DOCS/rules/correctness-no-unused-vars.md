# correctness/no-unused-vars

Правило `no-unused-vars` из набора `correctness` контролирует аспект «No Unused Vars». Оно помогает избегать проблем в коде, связанных с требованием «no unused vars», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unused-vars.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unused-vars выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unused vars» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unused-vars сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unused vars» нарушено.
  return false;
}
```
