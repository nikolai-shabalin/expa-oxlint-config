# style/prefer-destructuring

Правило `prefer-destructuring` из набора `style` контролирует аспект «Prefer Destructuring». Оно помогает избегать проблем в коде, связанных с требованием «prefer destructuring», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-destructuring.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-destructuring выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer destructuring» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-destructuring сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer destructuring» нарушено.
  return false;
}
```
