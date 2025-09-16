# restriction/unambiguous

Правило `unambiguous` из набора `restriction` контролирует аспект «Unambiguous». Оно помогает избегать проблем в коде, связанных с требованием «unambiguous», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/unambiguous.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/unambiguous выполняется.

```js
function examplePassingRestriction() {
  // Требование «unambiguous» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/unambiguous сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «unambiguous» нарушено.
  return false;
}
```
