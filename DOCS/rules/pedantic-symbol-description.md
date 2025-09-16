# pedantic/symbol-description

Правило `symbol-description` из набора `pedantic` контролирует аспект «Symbol Description». Оно помогает избегать проблем в коде, связанных с требованием «symbol description», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/symbol-description.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/symbol-description выполняется.

```js
function examplePassingPedantic() {
  // Требование «symbol description» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/symbol-description сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «symbol description» нарушено.
  return false;
}
```
