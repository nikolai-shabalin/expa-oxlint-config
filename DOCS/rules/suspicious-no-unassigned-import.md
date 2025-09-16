# suspicious/no-unassigned-import

Правило `no-unassigned-import` из набора `suspicious` контролирует аспект «No Unassigned Import». Оно помогает избегать проблем в коде, связанных с требованием «no unassigned import», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unassigned-import.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unassigned-import выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unassigned import» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unassigned-import сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unassigned import» нарушено.
  return false;
}
```
