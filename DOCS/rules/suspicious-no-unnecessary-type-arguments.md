# suspicious/no-unnecessary-type-arguments

Правило `no-unnecessary-type-arguments` из набора `suspicious` контролирует аспект «No Unnecessary Type Arguments». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary type arguments», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-type-arguments.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-unnecessary-type-arguments выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no unnecessary type arguments» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-unnecessary-type-arguments сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no unnecessary type arguments» нарушено.
  return false;
}
```
