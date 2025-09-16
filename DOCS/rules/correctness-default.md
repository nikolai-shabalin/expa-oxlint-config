# correctness/default

Правило `default` из набора `correctness` контролирует аспект «Default». Оно помогает избегать проблем в коде, связанных с требованием «default», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/default.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/default выполняется.

```js
function examplePassingCorrectness() {
  // Требование «default» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/default сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «default» нарушено.
  return false;
}
```
