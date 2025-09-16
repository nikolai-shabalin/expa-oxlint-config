# style/prefer-to-be-object

Правило `prefer-to-be-object` из набора `style` контролирует аспект «Prefer To Be Object». Оно помогает избегать проблем в коде, связанных с требованием «prefer to be object», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-be-object.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-be-object выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to be object» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-be-object сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to be object» нарушено.
  return false;
}
```
