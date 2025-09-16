# style/no-extra-label

Правило `no-extra-label` из набора `style` контролирует аспект «No Extra Label». Оно помогает избегать проблем в коде, связанных с требованием «no extra label», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extra-label.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-extra-label выполняется.

```js
function examplePassingStyle() {
  // Требование «no extra label» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-extra-label сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no extra label» нарушено.
  return false;
}
```
