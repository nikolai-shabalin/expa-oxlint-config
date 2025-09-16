# style/no-magic-numbers

Правило `no-magic-numbers` из набора `style` контролирует аспект «No Magic Numbers». Оно помогает избегать проблем в коде, связанных с требованием «no magic numbers», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-magic-numbers.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-magic-numbers выполняется.

```js
function examplePassingStyle() {
  // Требование «no magic numbers» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-magic-numbers сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no magic numbers» нарушено.
  return false;
}
```
