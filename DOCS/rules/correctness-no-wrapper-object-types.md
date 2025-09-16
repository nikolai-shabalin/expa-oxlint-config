# correctness/no-wrapper-object-types

Правило `no-wrapper-object-types` из набора `correctness` контролирует аспект «No Wrapper Object Types». Оно помогает избегать проблем в коде, связанных с требованием «no wrapper object types», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-wrapper-object-types.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-wrapper-object-types выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no wrapper object types» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-wrapper-object-types сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no wrapper object types» нарушено.
  return false;
}
```
