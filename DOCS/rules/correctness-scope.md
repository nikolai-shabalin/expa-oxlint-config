# correctness/scope

Правило `scope` из набора `correctness` контролирует аспект «Scope». Оно помогает избегать проблем в коде, связанных с требованием «scope», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/scope.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/scope выполняется.

```js
function examplePassingCorrectness() {
  // Требование «scope» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/scope сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «scope» нарушено.
  return false;
}
```
