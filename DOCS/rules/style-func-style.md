# style/func-style

Правило `func-style` из набора `style` контролирует аспект «Func Style». Оно помогает избегать проблем в коде, связанных с требованием «func style», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/func-style.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/func-style выполняется.

```js
function examplePassingStyle() {
  // Требование «func style» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/func-style сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «func style» нарушено.
  return false;
}
```
