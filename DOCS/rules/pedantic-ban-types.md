# pedantic/ban-types

Правило `ban-types` из набора `pedantic` контролирует аспект «Ban Types». Оно помогает избегать проблем в коде, связанных с требованием «ban types», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/ban-types.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/ban-types выполняется.

```js
function examplePassingPedantic() {
  // Требование «ban types» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/ban-types сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «ban types» нарушено.
  return false;
}
```
