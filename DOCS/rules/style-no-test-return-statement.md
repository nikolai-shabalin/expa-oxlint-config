# style/no-test-return-statement

Правило `no-test-return-statement` из набора `style` контролирует аспект «No Test Return Statement». Оно помогает избегать проблем в коде, связанных с требованием «no test return statement», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-test-return-statement.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-test-return-statement выполняется.

```js
function examplePassingStyle() {
  // Требование «no test return statement» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-test-return-statement сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no test return statement» нарушено.
  return false;
}
```
