# correctness/anchor-is-valid

Правило `anchor-is-valid` из набора `correctness` контролирует аспект «Anchor Is Valid». Оно помогает избегать проблем в коде, связанных с требованием «anchor is valid», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/anchor-is-valid.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/anchor-is-valid выполняется.

```js
function examplePassingCorrectness() {
  // Требование «anchor is valid» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/anchor-is-valid сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «anchor is valid» нарушено.
  return false;
}
```
