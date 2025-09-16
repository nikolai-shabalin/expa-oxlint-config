# suspicious/misrefactored-assign-op

Правило `misrefactored-assign-op` из набора `suspicious` контролирует аспект «Misrefactored Assign Op». Оно помогает избегать проблем в коде, связанных с требованием «misrefactored assign op», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/misrefactored-assign-op.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/misrefactored-assign-op выполняется.

```js
function examplePassingSuspicious() {
  // Требование «misrefactored assign op» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/misrefactored-assign-op сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «misrefactored assign op» нарушено.
  return false;
}
```
