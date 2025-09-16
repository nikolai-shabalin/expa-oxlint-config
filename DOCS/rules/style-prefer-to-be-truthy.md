# style/prefer-to-be-truthy

Правило `prefer-to-be-truthy` из набора `style` контролирует аспект «Prefer To Be Truthy». Оно помогает избегать проблем в коде, связанных с требованием «prefer to be truthy», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-be-truthy.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-be-truthy выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to be truthy» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-be-truthy сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to be truthy» нарушено.
  return false;
}
```
