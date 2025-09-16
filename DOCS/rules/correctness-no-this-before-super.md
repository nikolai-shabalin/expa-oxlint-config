# correctness/no-this-before-super

Правило `no-this-before-super` из набора `correctness` контролирует аспект «No This Before Super». Оно помогает избегать проблем в коде, связанных с требованием «no this before super», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-this-before-super.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-this-before-super выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no this before super» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-this-before-super сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no this before super» нарушено.
  return false;
}
```
