# style/empty-brace-spaces

Правило `empty-brace-spaces` из набора `style` контролирует аспект «Empty Brace Spaces». Оно помогает избегать проблем в коде, связанных с требованием «empty brace spaces», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/empty-brace-spaces.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/empty-brace-spaces выполняется.

```js
function examplePassingStyle() {
  // Требование «empty brace spaces» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/empty-brace-spaces сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «empty brace spaces» нарушено.
  return false;
}
```
