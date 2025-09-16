# pedantic/max-depth

Правило `max-depth` из набора `pedantic` контролирует аспект «Max Depth». Оно помогает избегать проблем в коде, связанных с требованием «max depth», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-depth.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-depth выполняется.

```js
function examplePassingPedantic() {
  // Требование «max depth» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-depth сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max depth» нарушено.
  return false;
}
```
