# correctness/no-control-regex

Правило `no-control-regex` из набора `correctness` контролирует аспект «No Control Regex». Оно помогает избегать проблем в коде, связанных с требованием «no control regex», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-control-regex.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-control-regex выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no control regex» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-control-regex сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no control regex» нарушено.
  return false;
}
```
