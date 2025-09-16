# correctness/no-noninteractive-tabindex

Правило `no-noninteractive-tabindex` из набора `correctness` контролирует аспект «No Noninteractive Tabindex». Оно помогает избегать проблем в коде, связанных с требованием «no noninteractive tabindex», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-noninteractive-tabindex.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-noninteractive-tabindex выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no noninteractive tabindex» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-noninteractive-tabindex сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no noninteractive tabindex» нарушено.
  return false;
}
```
