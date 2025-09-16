# style/prefer-default-export

Правило `prefer-default-export` из набора `style` контролирует аспект «Prefer Default Export». Оно помогает избегать проблем в коде, связанных с требованием «prefer default export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-default-export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-default-export выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer default export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-default-export сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer default export» нарушено.
  return false;
}
```
