# style/no-duplicates

Правило `no-duplicates` из набора `style` контролирует аспект «No Duplicates». Оно помогает избегать проблем в коде, связанных с требованием «no duplicates», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicates.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-duplicates выполняется.

```js
function examplePassingStyle() {
  // Требование «no duplicates» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-duplicates сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no duplicates» нарушено.
  return false;
}
```
