# style/no-script-url

Правило `no-script-url` из набора `style` контролирует аспект «No Script Url». Оно помогает избегать проблем в коде, связанных с требованием «no script url», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-script-url.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-script-url выполняется.

```js
function examplePassingStyle() {
  // Требование «no script url» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-script-url сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no script url» нарушено.
  return false;
}
```
