# correctness/no-constant-binary-expression

Правило `no-constant-binary-expression` из набора `correctness` контролирует аспект «No Constant Binary Expression». Оно помогает избегать проблем в коде, связанных с требованием «no constant binary expression», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-constant-binary-expression.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-constant-binary-expression выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no constant binary expression» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-constant-binary-expression сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no constant binary expression» нарушено.
  return false;
}
```
