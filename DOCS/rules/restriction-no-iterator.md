# restriction/no-iterator

Правило `no-iterator` из набора `restriction` контролирует аспект «No Iterator». Оно помогает избегать проблем в коде, связанных с требованием «no iterator», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-iterator.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-iterator выполняется.

```js
function examplePassingRestriction() {
  // Требование «no iterator» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-iterator сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no iterator» нарушено.
  return false;
}
```
