# pedantic/no-unsafe-member-access

Правило `no-unsafe-member-access` из набора `pedantic` контролирует аспект «No Unsafe Member Access». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe member access», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-member-access.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-member-access выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe member access» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-member-access сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe member access» нарушено.
  return false;
}
```
