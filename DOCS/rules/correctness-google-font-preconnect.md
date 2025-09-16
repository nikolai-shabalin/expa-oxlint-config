# correctness/google-font-preconnect

Правило `google-font-preconnect` из набора `correctness` контролирует аспект «Google Font Preconnect». Оно помогает избегать проблем в коде, связанных с требованием «google font preconnect», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/google-font-preconnect.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/google-font-preconnect выполняется.

```js
function examplePassingCorrectness() {
  // Требование «google font preconnect» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/google-font-preconnect сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «google font preconnect» нарушено.
  return false;
}
```
