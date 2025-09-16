# correctness/no-async-client-component

Правило `no-async-client-component` из набора `correctness` контролирует аспект «No Async Client Component». Оно помогает избегать проблем в коде, связанных с требованием «no async client component», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-async-client-component.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-async-client-component выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no async client component» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-async-client-component сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no async client component» нарушено.
  return false;
}
```
