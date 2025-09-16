# nursery/export

Правило `export` из набора `nursery` контролирует аспект «Export». Оно помогает избегать проблем в коде, связанных с требованием «export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило nursery/export выполняется.

```js
function examplePassingNursery() {
  // Требование «export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило nursery/export сигнализирует о проблеме.

```js
function exampleFailingNursery() {
  // Требование «export» нарушено.
  return false;
}
```
