# restriction/no-barrel-file

Правило `no-barrel-file` из набора `restriction` контролирует аспект «No Barrel File». Оно помогает избегать проблем в коде, связанных с требованием «no barrel file», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-barrel-file.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-barrel-file выполняется.

```js
function examplePassingRestriction() {
  // Требование «no barrel file» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-barrel-file сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no barrel file» нарушено.
  return false;
}
```
