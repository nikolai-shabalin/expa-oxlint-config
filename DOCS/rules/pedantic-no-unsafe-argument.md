# pedantic/no-unsafe-argument

Правило `no-unsafe-argument` из набора `pedantic` контролирует аспект «No Unsafe Argument». Оно помогает избегать проблем в коде, связанных с требованием «no unsafe argument», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-unsafe-argument.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-unsafe-argument выполняется.

```js
function examplePassingPedantic() {
  // Требование «no unsafe argument» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-unsafe-argument сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no unsafe argument» нарушено.
  return false;
}
```
