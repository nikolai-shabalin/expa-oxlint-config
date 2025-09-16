# style/prefer-spread

Правило `prefer-spread` из набора `style` контролирует аспект «Prefer Spread». Оно помогает избегать проблем в коде, связанных с требованием «prefer spread», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-spread.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-spread выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer spread» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-spread сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer spread» нарушено.
  return false;
}
```
