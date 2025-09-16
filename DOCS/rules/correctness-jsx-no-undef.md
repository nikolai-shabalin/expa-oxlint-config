# correctness/jsx-no-undef

Правило `jsx-no-undef` из набора `correctness` контролирует аспект «Jsx No Undef». Оно помогает избегать проблем в коде, связанных с требованием «jsx no undef», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-undef.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/jsx-no-undef выполняется.

```js
function examplePassingCorrectness() {
  // Требование «jsx no undef» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/jsx-no-undef сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «jsx no undef» нарушено.
  return false;
}
```
