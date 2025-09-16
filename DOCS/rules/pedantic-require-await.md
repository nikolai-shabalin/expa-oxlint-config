# pedantic/require-await

Правило `require-await` из набора `pedantic` контролирует аспект «Require Await». Оно помогает избегать проблем в коде, связанных с требованием «require await», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/require-await.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/require-await выполняется.

```js
function examplePassingPedantic() {
  // Требование «require await» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/require-await сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «require await» нарушено.
  return false;
}
```
