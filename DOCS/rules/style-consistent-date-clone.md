# style/consistent-date-clone

Правило `consistent-date-clone` из набора `style` контролирует аспект «Consistent Date Clone». Оно помогает избегать проблем в коде, связанных с требованием «consistent date clone», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-date-clone.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-date-clone выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent date clone» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-date-clone сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent date clone» нарушено.
  return false;
}
```
