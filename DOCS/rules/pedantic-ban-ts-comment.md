# pedantic/ban-ts-comment

Правило `ban-ts-comment` из набора `pedantic` контролирует аспект «Ban Ts Comment». Оно помогает избегать проблем в коде, связанных с требованием «ban ts comment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/ban-ts-comment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/ban-ts-comment выполняется.

```js
function examplePassingPedantic() {
  // Требование «ban ts comment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/ban-ts-comment сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «ban ts comment» нарушено.
  return false;
}
```
