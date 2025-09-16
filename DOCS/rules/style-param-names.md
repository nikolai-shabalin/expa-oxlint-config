# style/param-names

Правило `param-names` из набора `style` контролирует аспект «Param Names». Оно помогает избегать проблем в коде, связанных с требованием «param names», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/param-names.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/param-names выполняется.

```js
function examplePassingStyle() {
  // Требование «param names» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/param-names сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «param names» нарушено.
  return false;
}
```
