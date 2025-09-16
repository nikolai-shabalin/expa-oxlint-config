# style/no-duplicate-hooks

Правило `no-duplicate-hooks` из набора `style` контролирует аспект «No Duplicate Hooks». Оно помогает избегать проблем в коде, связанных с требованием «no duplicate hooks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-duplicate-hooks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-duplicate-hooks выполняется.

```js
function examplePassingStyle() {
  // Требование «no duplicate hooks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-duplicate-hooks сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no duplicate hooks» нарушено.
  return false;
}
```
