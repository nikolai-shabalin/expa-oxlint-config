# correctness/no-this-alias

Правило `no-this-alias` из набора `correctness` контролирует аспект «No This Alias». Оно помогает избегать проблем в коде, связанных с требованием «no this alias», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-this-alias.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-this-alias выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no this alias» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-this-alias сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no this alias» нарушено.
  return false;
}
```
