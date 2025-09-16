# correctness/next-script-for-ga

Правило `next-script-for-ga` из набора `correctness` контролирует аспект «Next Script For Ga». Оно помогает избегать проблем в коде, связанных с требованием «next script for ga», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/next-script-for-ga.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/next-script-for-ga выполняется.

```js
function examplePassingCorrectness() {
  // Требование «next script for ga» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/next-script-for-ga сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «next script for ga» нарушено.
  return false;
}
```
