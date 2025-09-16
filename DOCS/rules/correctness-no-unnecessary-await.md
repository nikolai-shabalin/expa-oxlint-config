# correctness/no-unnecessary-await

Правило `no-unnecessary-await` из набора `correctness` контролирует аспект «No Unnecessary Await». Оно помогает избегать проблем в коде, связанных с требованием «no unnecessary await», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unnecessary-await.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/no-unnecessary-await выполняется.

```js
function examplePassingCorrectness() {
  // Требование «no unnecessary await» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/no-unnecessary-await сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «no unnecessary await» нарушено.
  return false;
}
```
