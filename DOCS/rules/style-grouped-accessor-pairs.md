# style/grouped-accessor-pairs

Правило `grouped-accessor-pairs` из набора `style` контролирует аспект «Grouped Accessor Pairs». Оно помогает избегать проблем в коде, связанных с требованием «grouped accessor pairs», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/grouped-accessor-pairs.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/grouped-accessor-pairs выполняется.

```js
function examplePassingStyle() {
  // Требование «grouped accessor pairs» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/grouped-accessor-pairs сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «grouped accessor pairs» нарушено.
  return false;
}
```
