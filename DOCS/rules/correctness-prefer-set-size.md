# correctness/prefer-set-size

Правило `prefer-set-size` из набора `correctness` контролирует аспект «Prefer Set Size». Оно помогает избегать проблем в коде, связанных с требованием «prefer set size», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-set-size.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/prefer-set-size выполняется.

```js
function examplePassingCorrectness() {
  // Требование «prefer set size» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/prefer-set-size сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «prefer set size» нарушено.
  return false;
}
```
