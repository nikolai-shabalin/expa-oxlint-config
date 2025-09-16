# style/prefer-return-this-type

Правило `prefer-return-this-type` из набора `style` контролирует аспект «Prefer Return This Type». Оно помогает избегать проблем в коде, связанных с требованием «prefer return this type», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-return-this-type.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-return-this-type выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer return this type» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-return-this-type сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer return this type» нарушено.
  return false;
}
```
