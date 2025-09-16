# correctness/jsx-key

Правило `jsx-key` из набора `correctness` контролирует аспект «Jsx Key». Оно помогает избегать проблем в коде, связанных с требованием «jsx key», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-key.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/jsx-key выполняется.

```js
function examplePassingCorrectness() {
  // Требование «jsx key» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/jsx-key сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «jsx key» нарушено.
  return false;
}
```
