# pedantic/no-constructor-return

Правило `no-constructor-return` из набора `pedantic` контролирует аспект «No Constructor Return». Оно помогает избегать проблем в коде, связанных с требованием «no constructor return», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-constructor-return.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-constructor-return выполняется.

```js
function examplePassingPedantic() {
  // Требование «no constructor return» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-constructor-return сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no constructor return» нарушено.
  return false;
}
```
