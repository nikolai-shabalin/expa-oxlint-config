# style/text-encoding-identifier-case

Правило `text-encoding-identifier-case` из набора `style` контролирует аспект «Text Encoding Identifier Case». Оно помогает избегать проблем в коде, связанных с требованием «text encoding identifier case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/text-encoding-identifier-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/text-encoding-identifier-case выполняется.

```js
function examplePassingStyle() {
  // Требование «text encoding identifier case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/text-encoding-identifier-case сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «text encoding identifier case» нарушено.
  return false;
}
```
