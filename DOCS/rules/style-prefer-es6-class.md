# style/prefer-es6-class

Правило `prefer-es6-class` из набора `style` контролирует аспект «Prefer Es6 Class». Оно помогает избегать проблем в коде, связанных с требованием «prefer es6 class», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-es6-class.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-es6-class выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer es6 class» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-es6-class сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer es6 class» нарушено.
  return false;
}
```
