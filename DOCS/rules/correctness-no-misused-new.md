# correctness/no-misused-new

Правило `no-misused-new` из набора `correctness` контролирует аспект «No Misused New». Оно помогает избегать проблем в коде, связанных с требованием «no misused new», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-misused-new.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-misused-new выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no misused new» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-misused-new сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no misused new» нарушено.
  return false;
}
```
