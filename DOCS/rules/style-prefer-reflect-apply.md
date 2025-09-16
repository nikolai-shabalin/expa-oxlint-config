# style/prefer-reflect-apply

Правило `prefer-reflect-apply` из набора `style` контролирует аспект «Prefer Reflect Apply». Оно помогает избегать проблем в коде, связанных с требованием «prefer reflect apply», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-reflect-apply.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-reflect-apply выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer reflect apply» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-reflect-apply сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer reflect apply» нарушено.
  return false;
}
```
