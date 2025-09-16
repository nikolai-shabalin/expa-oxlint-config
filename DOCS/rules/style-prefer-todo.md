# style/prefer-todo

Правило `prefer-todo` из набора `style` контролирует аспект «Prefer Todo». Оно помогает избегать проблем в коде, связанных с требованием «prefer todo», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-todo.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-todo выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer todo» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-todo сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer todo» нарушено.
  return false;
}
```
