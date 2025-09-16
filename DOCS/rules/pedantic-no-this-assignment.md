# pedantic/no-this-assignment

Правило `no-this-assignment` из набора `pedantic` контролирует аспект «No This Assignment». Оно помогает избегать проблем в коде, связанных с требованием «no this assignment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-this-assignment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-this-assignment выполняется.

```js
function examplePassingPedantic() {
  // Требование «no this assignment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-this-assignment сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no this assignment» нарушено.
  return false;
}
```
