# correctness/unbound-method

Правило `unbound-method` из набора `correctness` контролирует аспект «Unbound Method». Оно помогает избегать проблем в коде, связанных с требованием «unbound method», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/unbound-method.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/unbound-method выполняется.

```js
function examplePassingCorrectness() {
  // Требование «unbound method» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/unbound-method сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «unbound method» нарушено.
  return false;
}
```
