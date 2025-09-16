# style/max-expects

Правило `max-expects` из набора `style` контролирует аспект «Max Expects». Оно помогает избегать проблем в коде, связанных с требованием «max expects», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/max-expects.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/max-expects выполняется.

```js
function examplePassingStyle() {
  // Требование «max expects» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/max-expects сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «max expects» нарушено.
  return false;
}
```
