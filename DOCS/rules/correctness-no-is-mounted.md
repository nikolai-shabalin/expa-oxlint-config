# correctness/no-is-mounted

Правило `no-is-mounted` из набора `correctness` контролирует аспект «No Is Mounted». Оно помогает избегать проблем в коде, связанных с требованием «no is mounted», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-is-mounted.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-is-mounted выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no is mounted» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-is-mounted сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no is mounted» нарушено.
  return false;
}
```
