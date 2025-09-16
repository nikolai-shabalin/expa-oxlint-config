# style/no-named-default

Правило `no-named-default` из набора `style` контролирует аспект «No Named Default». Оно помогает избегать проблем в коде, связанных с требованием «no named default», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-named-default.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-named-default выполняется.

```js
function examplePassingStyle() {
  // Требование «no named default» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-named-default сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no named default» нарушено.
  return false;
}
```
