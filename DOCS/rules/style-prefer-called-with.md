# style/prefer-called-with

Правило `prefer-called-with` из набора `style` контролирует аспект «Prefer Called With». Оно помогает избегать проблем в коде, связанных с требованием «prefer called with», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-called-with.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-called-with выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer called with» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-called-with сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer called with» нарушено.
  return false;
}
```
