# style/no-exports-assign

Правило `no-exports-assign` из набора `style` контролирует аспект «No Exports Assign». Оно помогает избегать проблем в коде, связанных с требованием «no exports assign», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-exports-assign.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-exports-assign выполняется.

```js
function examplePassingStyle() {
  // Требование «no exports assign» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-exports-assign сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no exports assign» нарушено.
  return false;
}
```
