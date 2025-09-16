# correctness/use-isnan

Правило `use-isnan` из набора `correctness` контролирует аспект «Use Isnan». Оно помогает избегать проблем в коде, связанных с требованием «use isnan», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/use-isnan.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/use-isnan выполняется.

```js
function examplePassingCorrectness() {
  // Требование «use isnan» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/use-isnan сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «use isnan» нарушено.
  return false;
}
```
