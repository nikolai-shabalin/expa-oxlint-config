# pedantic/max-dependencies

Правило `max-dependencies` из набора `pedantic` контролирует аспект «Max Dependencies». Оно помогает избегать проблем в коде, связанных с требованием «max dependencies», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-dependencies.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/max-dependencies выполняется.

```js
function examplePassingPedantic() {
  // Требование «max dependencies» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/max-dependencies сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «max dependencies» нарушено.
  return false;
}
```
