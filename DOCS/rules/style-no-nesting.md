# style/no-nesting

Правило `no-nesting` из набора `style` контролирует аспект «No Nesting». Оно помогает избегать проблем в коде, связанных с требованием «no nesting», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-nesting.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-nesting выполняется.

```js
function examplePassingStyle() {
  // Требование «no nesting» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-nesting сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no nesting» нарушено.
  return false;
}
```
