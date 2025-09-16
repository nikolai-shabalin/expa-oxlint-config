# pedantic/prefer-ts-expect-error

Правило `prefer-ts-expect-error` из набора `pedantic` контролирует аспект «Prefer Ts Expect Error». Оно помогает избегать проблем в коде, связанных с требованием «prefer ts expect error», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-ts-expect-error.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-ts-expect-error выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer ts expect error» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-ts-expect-error сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer ts expect error» нарушено.
  return false;
}
```
