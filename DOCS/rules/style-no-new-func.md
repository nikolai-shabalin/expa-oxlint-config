# style/no-new-func

Правило `no-new-func` из набора `style` контролирует аспект «No New Func». Оно помогает избегать проблем в коде, связанных с требованием «no new func», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new-func.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-new-func выполняется.

```js
function examplePassingStyle() {
  // Требование «no new func» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-new-func сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no new func» нарушено.
  return false;
}
```
