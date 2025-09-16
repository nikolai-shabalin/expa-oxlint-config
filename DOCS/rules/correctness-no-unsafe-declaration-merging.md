# correctness/no-unsafe-declaration-merging

Правило `no-unsafe-declaration-merging` из набора `correctness` контролирует аспект «No Unsafe Declaration Merging». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe declaration merging», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-declaration-merging.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unsafe-declaration-merging выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unsafe declaration merging» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unsafe-declaration-merging сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unsafe declaration merging» нарушено.
  return false;
}
```
