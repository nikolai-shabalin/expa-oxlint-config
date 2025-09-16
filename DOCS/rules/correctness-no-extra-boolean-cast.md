# correctness/no-extra-boolean-cast

Правило `no-extra-boolean-cast` из набора `correctness` контролирует аспект «No Extra Boolean Cast». Оно помогает избегать проблем в коде, связанных с требованием «no extra boolean cast», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extra-boolean-cast.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-extra-boolean-cast выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no extra boolean cast» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-extra-boolean-cast сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no extra boolean cast» нарушено.
  return false;
}
```
