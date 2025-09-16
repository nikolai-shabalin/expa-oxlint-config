# pedantic/no-else-return

Правило `no-else-return` из набора `pedantic` контролирует аспект «No Else Return». Оно помогает избегать проблем в коде, связанных с требованием «no else return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-else-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-else-return выполняется.

```js
function examplePassingPedantic() {
  // Требование «no else return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-else-return сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no else return» нарушено.
  return false;
}
```
