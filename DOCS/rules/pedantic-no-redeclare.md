# pedantic/no-redeclare

Правило `no-redeclare` из набора `pedantic` контролирует аспект «No Redeclare». Оно помогает избегать проблем в коде, связанных с требованием «no redeclare», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-redeclare.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-redeclare выполняется.

```js
function examplePassingPedantic() {
  // Требование «no redeclare» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-redeclare сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no redeclare» нарушено.
  return false;
}
```
