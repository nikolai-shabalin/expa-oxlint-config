# style/exports-last

Правило `exports-last` из набора `style` контролирует аспект «Exports Last». Оно помогает избегать проблем в коде, связанных с требованием «exports last», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/exports-last.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/exports-last выполняется.

```js
function examplePassingStyle() {
  // Требование «exports last» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/exports-last сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «exports last» нарушено.
  return false;
}
```
