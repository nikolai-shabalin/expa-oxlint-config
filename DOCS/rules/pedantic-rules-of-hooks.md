# pedantic/rules-of-hooks

Правило `rules-of-hooks` из набора `pedantic` контролирует аспект «Rules Of Hooks». Оно помогает избегать проблем в коде, связанных с требованием «rules of hooks», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/rules-of-hooks.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/rules-of-hooks выполняется.

```js
function examplePassingPedantic() {
  // Требование «rules of hooks» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/rules-of-hooks сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «rules of hooks» нарушено.
  return false;
}
```
