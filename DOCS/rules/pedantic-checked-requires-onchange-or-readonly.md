# pedantic/checked-requires-onchange-or-readonly

Правило `checked-requires-onchange-or-readonly` из набора `pedantic` контролирует аспект «Checked Requires Onchange Or Readonly». Оно помогает избегать проблем в коде, связанных с требованием «checked requires onchange or readonly», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/checked-requires-onchange-or-readonly.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/checked-requires-onchange-or-readonly выполняется.

```js
function examplePassingPedantic() {
  // Требование «checked requires onchange or readonly» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/checked-requires-onchange-or-readonly сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «checked requires onchange or readonly» нарушено.
  return false;
}
```
