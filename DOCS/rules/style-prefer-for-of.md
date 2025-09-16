# style/prefer-for-of

Правило `prefer-for-of` из набора `style` контролирует аспект «Prefer For Of». Оно помогает избегать проблем в коде, связанных с требованием «prefer for of», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-for-of.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-for-of выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer for of» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-for-of сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer for of» нарушено.
  return false;
}
```
