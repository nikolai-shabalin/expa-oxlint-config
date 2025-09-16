# pedantic/require-number-to-fixed-digits-argument

Правило `require-number-to-fixed-digits-argument` из набора `pedantic` контролирует аспект «Require Number To Fixed Digits Argument». Оно помогает избегать проблем в коде, связанных с требованием «require number to fixed digits argument», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-number-to-fixed-digits-argument.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-number-to-fixed-digits-argument выполняется.

```js
function examplePassingPedantic() {
  // Требование «require number to fixed digits argument» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-number-to-fixed-digits-argument сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require number to fixed digits argument» нарушено.
  return false;
}
```
