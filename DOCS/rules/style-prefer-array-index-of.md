# style/prefer-array-index-of

Правило `prefer-array-index-of` из набора `style` контролирует аспект «Prefer Array Index Of». Оно помогает избегать проблем в коде, связанных с требованием «prefer array index of», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-array-index-of.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-array-index-of выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer array index of» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-array-index-of сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer array index of» нарушено.
  return false;
}
```
