# correctness/no-meaningless-void-operator

Правило `no-meaningless-void-operator` из набора `correctness` контролирует аспект «No Meaningless Void Operator». Оно помогает избегать проблем в коде, связанных с требованием «no meaningless void operator», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-meaningless-void-operator.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-meaningless-void-operator выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no meaningless void operator» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-meaningless-void-operator сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no meaningless void operator» нарушено.
  return false;
}
```
