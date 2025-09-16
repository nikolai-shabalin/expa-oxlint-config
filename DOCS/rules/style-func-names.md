# style/func-names

Правило `func-names` из набора `style` контролирует аспект «Func Names». Оно помогает избегать проблем в коде, связанных с требованием «func names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/func-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/func-names выполняется.

```js
function examplePassingStyle() {
  // Требование «func names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/func-names сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «func names» нарушено.
  return false;
}
```
