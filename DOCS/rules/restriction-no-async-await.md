# restriction/no-async-await

Правило `no-async-await` из набора `restriction` контролирует аспект «No Async Await». Оно помогает избегать проблем в коде, связанных с требованием «no async await», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-async-await.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-async-await выполняется.

```js
function examplePassingRestriction() {
  // Требование «no async await» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-async-await сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no async await» нарушено.
  return false;
}
```
