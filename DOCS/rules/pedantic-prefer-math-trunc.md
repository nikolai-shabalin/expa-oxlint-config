# pedantic/prefer-math-trunc

Правило `prefer-math-trunc` из набора `pedantic` контролирует аспект «Prefer Math Trunc». Оно помогает избегать проблем в коде, связанных с требованием «prefer math trunc», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-math-trunc.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-math-trunc выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer math trunc» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-math-trunc сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer math trunc» нарушено.
  return false;
}
```
