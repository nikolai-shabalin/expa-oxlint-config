# correctness/no-dupe-else-if

Правило `no-dupe-else-if` из набора `correctness` контролирует аспект «No Dupe Else If». Оно помогает избегать проблем в коде, связанных с требованием «no dupe else if», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-dupe-else-if.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-dupe-else-if выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no dupe else if» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-dupe-else-if сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no dupe else if» нарушено.
  return false;
}
```
