# correctness/no-typos

Правило `no-typos` из набора `correctness` контролирует аспект «No Typos». Оно помогает избегать проблем в коде, связанных с требованием «no typos», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-typos.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-typos выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no typos» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-typos сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no typos» нарушено.
  return false;
}
```
