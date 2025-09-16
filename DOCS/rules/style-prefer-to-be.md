# style/prefer-to-be

Правило `prefer-to-be` из набора `style` контролирует аспект «Prefer To Be». Оно помогает избегать проблем в коде, связанных с требованием «prefer to be», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-to-be.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-to-be выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer to be» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-to-be сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer to be» нарушено.
  return false;
}
```
