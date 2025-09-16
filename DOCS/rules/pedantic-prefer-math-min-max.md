# pedantic/prefer-math-min-max

Правило `prefer-math-min-max` из набора `pedantic` контролирует аспект «Prefer Math Min Max». Оно помогает избегать проблем в коде, связанных с требованием «prefer math min max», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-math-min-max.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-math-min-max выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer math min max» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-math-min-max сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer math min max» нарушено.
  return false;
}
```
