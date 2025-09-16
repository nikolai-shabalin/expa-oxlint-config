# pedantic/prefer-string-replace-all

Правило `prefer-string-replace-all` из набора `pedantic` контролирует аспект «Prefer String Replace All». Оно помогает избегать проблем в коде, связанных с требованием «prefer string replace all», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-string-replace-all.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-string-replace-all выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer string replace all» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-string-replace-all сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer string replace all» нарушено.
  return false;
}
```
