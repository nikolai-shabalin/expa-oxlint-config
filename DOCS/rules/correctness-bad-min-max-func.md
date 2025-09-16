# correctness/bad-min-max-func

Правило `bad-min-max-func` из набора `correctness` контролирует аспект «Bad Min Max Func». Оно помогает избегать проблем в коде, связанных с требованием «bad min max func», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/bad-min-max-func.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/bad-min-max-func выполняется.

```js
function examplePassingCorrectness() {
  // Требование «bad min max func» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/bad-min-max-func сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «bad min max func» нарушено.
  return false;
}
```
