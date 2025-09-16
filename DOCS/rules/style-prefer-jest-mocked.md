# style/prefer-jest-mocked

Правило `prefer-jest-mocked` из набора `style` контролирует аспект «Prefer Jest Mocked». Оно помогает избегать проблем в коде, связанных с требованием «prefer jest mocked», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-jest-mocked.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-jest-mocked выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer jest mocked» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-jest-mocked сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer jest mocked» нарушено.
  return false;
}
```
