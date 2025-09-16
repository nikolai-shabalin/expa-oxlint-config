# style/prefer-await-to-then

Правило `prefer-await-to-then` из набора `style` контролирует аспект «Prefer Await To Then». Оно помогает избегать проблем в коде, связанных с требованием «prefer await to then», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-await-to-then.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-await-to-then выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer await to then» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-await-to-then сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer await to then» нарушено.
  return false;
}
```
