# correctness/no-before-interactive-script-outside-document

Правило `no-before-interactive-script-outside-document` из набора `correctness` контролирует аспект «No Before Interactive Script Outside Document». Оно помогает избегать проблем в коде, связанных с требованием «no before interactive script outside document», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-before-interactive-script-outside-document.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-before-interactive-script-outside-document выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no before interactive script outside document» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-before-interactive-script-outside-document сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no before interactive script outside document» нарушено.
  return false;
}
```
