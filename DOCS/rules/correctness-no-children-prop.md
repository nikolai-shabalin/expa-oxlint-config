# correctness/no-children-prop

Правило `no-children-prop` из набора `correctness` контролирует аспект «No Children Prop». Оно помогает избегать проблем в коде, связанных с требованием «no children prop», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-children-prop.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-children-prop выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no children prop» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-children-prop сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no children prop» нарушено.
  return false;
}
```
