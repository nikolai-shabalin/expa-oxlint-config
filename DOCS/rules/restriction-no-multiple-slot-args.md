# restriction/no-multiple-slot-args

Правило `no-multiple-slot-args` из набора `restriction` контролирует аспект «No Multiple Slot Args». Оно помогает избегать проблем в коде, связанных с требованием «no multiple slot args», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-multiple-slot-args.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-multiple-slot-args выполняется.

```js
function examplePassingRestriction() {
  // Требование «no multiple slot args» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-multiple-slot-args сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no multiple slot args» нарушено.
  return false;
}
```
