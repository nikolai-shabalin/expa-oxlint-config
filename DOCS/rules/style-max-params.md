# style/max-params

Правило `max-params` из набора `style` контролирует аспект «Max Params». Оно помогает избегать проблем в коде, связанных с требованием «max params», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-params.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/max-params выполняется.

```js
function examplePassingStyle() {
  // Требование «max params» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/max-params сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «max params» нарушено.
  return false;
}
```
