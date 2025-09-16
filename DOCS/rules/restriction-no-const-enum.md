# restriction/no-const-enum

Правило `no-const-enum` из набора `restriction` контролирует аспект «No Const Enum». Оно помогает избегать проблем в коде, связанных с требованием «no const enum», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-const-enum.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-const-enum выполняется.

```js
function examplePassingRestriction() {
  // Требование «no const enum» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-const-enum сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no const enum» нарушено.
  return false;
}
```
