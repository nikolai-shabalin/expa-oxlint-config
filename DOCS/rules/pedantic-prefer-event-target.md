# pedantic/prefer-event-target

Правило `prefer-event-target` из набора `pedantic` контролирует аспект «Prefer Event Target». Оно помогает избегать проблем в коде, связанных с требованием «prefer event target», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-event-target.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-event-target выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer event target» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-event-target сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer event target» нарушено.
  return false;
}
```
