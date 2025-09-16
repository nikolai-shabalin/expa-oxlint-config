# style/prefer-object-spread

Правило `prefer-object-spread` из набора `style` контролирует аспект «Prefer Object Spread». Оно помогает избегать проблем в коде, связанных с требованием «prefer object spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-object-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-object-spread выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer object spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-object-spread сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer object spread» нарушено.
  return false;
}
```
