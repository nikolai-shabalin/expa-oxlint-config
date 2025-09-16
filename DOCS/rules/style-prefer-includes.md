# style/prefer-includes

Правило `prefer-includes` из набора `style` контролирует аспект «Prefer Includes». Оно помогает избегать проблем в коде, связанных с требованием «prefer includes», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-includes.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-includes выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer includes» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-includes сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer includes» нарушено.
  return false;
}
```
