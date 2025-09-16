# style/self-closing-comp

Правило `self-closing-comp` из набора `style` контролирует аспект «Self Closing Comp». Оно помогает избегать проблем в коде, связанных с требованием «self closing comp», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/self-closing-comp.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/self-closing-comp выполняется.

```js
function examplePassingStyle() {
  // Требование «self closing comp» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/self-closing-comp сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «self closing comp» нарушено.
  return false;
}
```
