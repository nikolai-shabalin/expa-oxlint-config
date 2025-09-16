# correctness/no-duplicate-case

Правило `no-duplicate-case` из набора `correctness` контролирует аспект «No Duplicate Case». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-duplicate-case выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no duplicate case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-duplicate-case сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no duplicate case» нарушено.
  return false;
}
```
