# style/no-ternary

Правило `no-ternary` из набора `style` контролирует аспект «No Ternary». Оно помогает избегать проблем в коде, связанных с требованием «no ternary», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-ternary.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-ternary выполняется.

```js
function examplePassingStyle() {
  // Требование «no ternary» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-ternary сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no ternary» нарушено.
  return false;
}
```
