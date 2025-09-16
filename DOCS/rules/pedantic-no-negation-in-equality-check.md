# pedantic/no-negation-in-equality-check

Правило `no-negation-in-equality-check` из набора `pedantic` контролирует аспект «No Negation In Equality Check». Оно помогает избегать проблем в коде, связанных с требованием «no negation in equality check», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-negation-in-equality-check.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-negation-in-equality-check выполняется.

```js
function examplePassingPedantic() {
  // Требование «no negation in equality check» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-negation-in-equality-check сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no negation in equality check» нарушено.
  return false;
}
```
