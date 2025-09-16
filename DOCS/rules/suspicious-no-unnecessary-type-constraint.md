# suspicious/no-unnecessary-type-constraint

Правило `no-unnecessary-type-constraint` из набора `suspicious` контролирует аспект «No Unnecessary Type Constraint». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary type constraint», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-type-constraint.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unnecessary-type-constraint выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unnecessary type constraint» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unnecessary-type-constraint сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unnecessary type constraint» нарушено.
  return false;
}
```
