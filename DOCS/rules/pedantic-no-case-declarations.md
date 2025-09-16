# pedantic/no-case-declarations

Правило `no-case-declarations` из набора `pedantic` контролирует аспект «No Case Declarations». Оно помогает избегать проблем в коде, связанных с требованием «no case declarations», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-case-declarations.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-case-declarations выполняется.

```js
function examplePassingPedantic() {
  // Требование «no case declarations» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-case-declarations сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no case declarations» нарушено.
  return false;
}
```
