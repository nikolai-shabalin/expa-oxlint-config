# style/prefer-rest-params

Правило `prefer-rest-params` из набора `style` контролирует аспект «Prefer Rest Params». Оно помогает избегать проблем в коде, связанных с требованием «prefer rest params», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-rest-params.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-rest-params выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer rest params» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-rest-params сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer rest params» нарушено.
  return false;
}
```
