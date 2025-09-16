# correctness/no-unnecessary-parameter-property-assignment

Правило `no-unnecessary-parameter-property-assignment` из набора `correctness` контролирует аспект «No Unnecessary Parameter Property Assignment». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary parameter property assignment», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-parameter-property-assignment.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unnecessary-parameter-property-assignment выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unnecessary parameter property assignment» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unnecessary-parameter-property-assignment сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unnecessary parameter property assignment» нарушено.
  return false;
}
```
