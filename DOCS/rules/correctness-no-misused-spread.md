# correctness/no-misused-spread

Правило `no-misused-spread` из набора `correctness` контролирует аспект «No Misused Spread». Оно помогает избегать проблем в коде, связанных с требованием «no misused spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-misused-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-misused-spread выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no misused spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-misused-spread сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no misused spread» нарушено.
  return false;
}
```
