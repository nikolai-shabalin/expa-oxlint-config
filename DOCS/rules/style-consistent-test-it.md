# style/consistent-test-it

Правило `consistent-test-it` из набора `style` контролирует аспект «Consistent Test It». Оно помогает избегать проблем в коде, связанных с требованием «consistent test it», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/consistent-test-it.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/consistent-test-it выполняется.

```js
function examplePassingStyle() {
  // Требование «consistent test it» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/consistent-test-it сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «consistent test it» нарушено.
  return false;
}
```
