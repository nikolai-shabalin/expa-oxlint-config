# pedantic/eqeqeq

Правило `eqeqeq` из набора `pedantic` контролирует аспект «Eqeqeq». Оно помогает избегать проблем в коде, связанных с требованием «eqeqeq», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/eqeqeq.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/eqeqeq выполняется.

```js
function examplePassingPedantic() {
  // Требование «eqeqeq» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/eqeqeq сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «eqeqeq» нарушено.
  return false;
}
```
