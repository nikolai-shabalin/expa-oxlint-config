# pedantic/no-negated-condition

Правило `no-negated-condition` из набора `pedantic` контролирует аспект «No Negated Condition». Оно помогает избегать проблем в коде, связанных с требованием «no negated condition», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-negated-condition.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-negated-condition выполняется.

```js
function examplePassingPedantic() {
  // Требование «no negated condition» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-negated-condition сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no negated condition» нарушено.
  return false;
}
```
