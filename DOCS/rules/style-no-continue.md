# style/no-continue

Правило `no-continue` из набора `style` контролирует аспект «No Continue». Оно помогает избегать проблем в коде, связанных с требованием «no continue», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-continue.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-continue выполняется.

```js
function examplePassingStyle() {
  // Требование «no continue» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-continue сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no continue» нарушено.
  return false;
}
```
