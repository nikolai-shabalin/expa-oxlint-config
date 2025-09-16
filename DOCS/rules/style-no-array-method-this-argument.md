# style/no-array-method-this-argument

Правило `no-array-method-this-argument` из набора `style` контролирует аспект «No Array Method This Argument». Оно помогает избегать проблем в коде, связанных с требованием «no array method this argument», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-array-method-this-argument.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-array-method-this-argument выполняется.

```js
function examplePassingStyle() {
  // Требование «no array method this argument» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-array-method-this-argument сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no array method this argument» нарушено.
  return false;
}
```
