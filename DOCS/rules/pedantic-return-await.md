# pedantic/return-await

Правило `return-await` из набора `pedantic` контролирует аспект «Return Await». Оно помогает избегать проблем в коде, связанных с требованием «return await», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/return-await.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/return-await выполняется.

```js
function examplePassingPedantic() {
  // Требование «return await» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/return-await сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «return await» нарушено.
  return false;
}
```
