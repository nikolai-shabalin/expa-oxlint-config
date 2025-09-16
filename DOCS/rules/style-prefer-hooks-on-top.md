# style/prefer-hooks-on-top

Правило `prefer-hooks-on-top` из набора `style` контролирует аспект «Prefer Hooks On Top». Оно помогает избегать проблем в коде, связанных с требованием «prefer hooks on top», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-hooks-on-top.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-hooks-on-top выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer hooks on top» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-hooks-on-top сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer hooks on top» нарушено.
  return false;
}
```
