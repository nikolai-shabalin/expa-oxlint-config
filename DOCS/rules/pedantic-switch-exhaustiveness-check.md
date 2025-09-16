# pedantic/switch-exhaustiveness-check

Правило `switch-exhaustiveness-check` из набора `pedantic` контролирует аспект «Switch Exhaustiveness Check». Оно помогает избегать проблем в коде, связанных с требованием «switch exhaustiveness check», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/switch-exhaustiveness-check.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/switch-exhaustiveness-check выполняется.

```js
function examplePassingPedantic() {
  // Требование «switch exhaustiveness check» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/switch-exhaustiveness-check сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «switch exhaustiveness check» нарушено.
  return false;
}
```
