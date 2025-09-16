# pedantic/no-static-only-class

Правило `no-static-only-class` из набора `pedantic` контролирует аспект «No Static Only Class». Оно помогает избегать проблем в коде, связанных с требованием «no static only class», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-static-only-class.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-static-only-class выполняется.

```js
function examplePassingPedantic() {
  // Требование «no static only class» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-static-only-class сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no static only class» нарушено.
  return false;
}
```
