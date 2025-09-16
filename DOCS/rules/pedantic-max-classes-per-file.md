# pedantic/max-classes-per-file

Правило `max-classes-per-file` из набора `pedantic` контролирует аспект «Max Classes Per File». Оно помогает избегать проблем в коде, связанных с требованием «max classes per file», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-classes-per-file.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-classes-per-file выполняется.

```js
function examplePassingPedantic() {
  // Требование «max classes per file» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-classes-per-file сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max classes per file» нарушено.
  return false;
}
```
