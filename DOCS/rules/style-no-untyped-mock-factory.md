# style/no-untyped-mock-factory

Правило `no-untyped-mock-factory` из набора `style` контролирует аспект «No Untyped Mock Factory». Оно помогает избегать проблем в коде, связанных с требованием «no untyped mock factory», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-untyped-mock-factory.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-untyped-mock-factory выполняется.

```js
function examplePassingStyle() {
  // Требование «no untyped mock factory» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-untyped-mock-factory сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no untyped mock factory» нарушено.
  return false;
}
```
