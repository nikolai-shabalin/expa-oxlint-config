# style/no-mocks-import

Правило `no-mocks-import` из набора `style` контролирует аспект «No Mocks Import». Оно помогает избегать проблем в коде, связанных с требованием «no mocks import», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-mocks-import.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-mocks-import выполняется.

```js
function examplePassingStyle() {
  // Требование «no mocks import» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-mocks-import сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no mocks import» нарушено.
  return false;
}
```
