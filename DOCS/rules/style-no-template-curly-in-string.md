# style/no-template-curly-in-string

Правило `no-template-curly-in-string` из набора `style` контролирует аспект «No Template Curly In String». Оно помогает избегать проблем в коде, связанных с требованием «no template curly in string», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-template-curly-in-string.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-template-curly-in-string выполняется.

```js
function examplePassingStyle() {
  // Требование «no template curly in string» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-template-curly-in-string сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no template curly in string» нарушено.
  return false;
}
```
