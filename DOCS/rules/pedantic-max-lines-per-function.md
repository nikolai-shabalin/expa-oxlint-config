# pedantic/max-lines-per-function

Правило `max-lines-per-function` из набора `pedantic` контролирует аспект «Max Lines Per Function». Оно помогает избегать проблем в коде, связанных с требованием «max lines per function», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-lines-per-function.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-lines-per-function выполняется.

```js
function examplePassingPedantic() {
  // Требование «max lines per function» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-lines-per-function сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max lines per function» нарушено.
  return false;
}
```
