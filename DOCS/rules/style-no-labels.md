# style/no-labels

Правило `no-labels` из набора `style` контролирует аспект «No Labels». Оно помогает избегать проблем в коде, связанных с требованием «no labels», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-labels.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-labels выполняется.

```js
function examplePassingStyle() {
  // Требование «no labels» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-labels сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no labels» нарушено.
  return false;
}
```
