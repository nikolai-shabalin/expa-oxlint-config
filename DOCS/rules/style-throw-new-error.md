# style/throw-new-error

Правило `throw-new-error` из набора `style` контролирует аспект «Throw New Error». Оно помогает избегать проблем в коде, связанных с требованием «throw new error», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/throw-new-error.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/throw-new-error выполняется.

```js
function examplePassingStyle() {
  // Требование «throw new error» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/throw-new-error сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «throw new error» нарушено.
  return false;
}
```
