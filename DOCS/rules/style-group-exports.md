# style/group-exports

Правило `group-exports` из набора `style` контролирует аспект «Group Exports». Оно помогает избегать проблем в коде, связанных с требованием «group exports», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/group-exports.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/group-exports выполняется.

```js
function examplePassingStyle() {
  // Требование «group exports» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/group-exports сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «group exports» нарушено.
  return false;
}
```
