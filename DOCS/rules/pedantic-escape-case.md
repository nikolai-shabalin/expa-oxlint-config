# pedantic/escape-case

Правило `escape-case` из набора `pedantic` контролирует аспект «Escape Case». Оно помогает избегать проблем в коде, связанных с требованием «escape case», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/escape-case.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/escape-case выполняется.

```js
function examplePassingPedantic() {
  // Требование «escape case» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/escape-case сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «escape case» нарушено.
  return false;
}
```
