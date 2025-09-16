# style/prefer-catch

Правило `prefer-catch` из набора `style` контролирует аспект «Prefer Catch». Оно помогает избегать проблем в коде, связанных с требованием «prefer catch», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-catch.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-catch выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer catch» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-catch сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer catch» нарушено.
  return false;
}
```
