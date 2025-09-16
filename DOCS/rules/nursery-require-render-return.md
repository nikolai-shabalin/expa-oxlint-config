# nursery/require-render-return

Правило `require-render-return` из набора `nursery` контролирует аспект «Require Render Return». Оно помогает избегать проблем в коде, связанных с требованием «require render return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-render-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/require-render-return выполняется.

```js
function examplePassingNursery() {
  // Требование «require render return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/require-render-return сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «require render return» нарушено.
  return false;
}
```
