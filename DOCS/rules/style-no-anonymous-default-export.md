# style/no-anonymous-default-export

Правило `no-anonymous-default-export` из набора `style` контролирует аспект «No Anonymous Default Export». Оно помогает избегать проблем в коде, связанных с требованием «no anonymous default export», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-anonymous-default-export.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-anonymous-default-export выполняется.

```js
function examplePassingStyle() {
  // Требование «no anonymous default export» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-anonymous-default-export сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no anonymous default export» нарушено.
  return false;
}
```
