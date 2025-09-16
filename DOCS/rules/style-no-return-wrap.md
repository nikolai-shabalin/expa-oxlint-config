# style/no-return-wrap

Правило `no-return-wrap` из набора `style` контролирует аспект «No Return Wrap». Оно помогает избегать проблем в коде, связанных с требованием «no return wrap», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-return-wrap.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-return-wrap выполняется.

```js
function examplePassingStyle() {
  // Требование «no return wrap» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-return-wrap сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no return wrap» нарушено.
  return false;
}
```
