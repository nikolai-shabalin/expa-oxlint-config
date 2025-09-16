# pedantic/prefer-code-point

Правило `prefer-code-point` из набора `pedantic` контролирует аспект «Prefer Code Point». Оно помогает избегать проблем в коде, связанных с требованием «prefer code point», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-code-point.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-code-point выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer code point» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-code-point сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer code point» нарушено.
  return false;
}
```
