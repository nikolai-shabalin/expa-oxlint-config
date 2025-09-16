# style/id-length

Правило `id-length` из набора `style` контролирует аспект «Id Length». Оно помогает избегать проблем в коде, связанных с требованием «id length», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/id-length.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/id-length выполняется.

```js
function examplePassingStyle() {
  // Требование «id length» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/id-length сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «id length» нарушено.
  return false;
}
```
