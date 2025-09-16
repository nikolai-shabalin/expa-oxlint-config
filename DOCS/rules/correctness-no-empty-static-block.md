# correctness/no-empty-static-block

Правило `no-empty-static-block` из набора `correctness` контролирует аспект «No Empty Static Block». Оно помогает избегать проблем в коде, связанных с требованием «no empty static block», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-empty-static-block.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-empty-static-block выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no empty static block» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-empty-static-block сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no empty static block» нарушено.
  return false;
}
```
