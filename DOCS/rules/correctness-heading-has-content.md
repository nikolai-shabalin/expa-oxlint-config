# correctness/heading-has-content

Правило `heading-has-content` из набора `correctness` контролирует аспект «Heading Has Content». Оно помогает избегать проблем в коде, связанных с требованием «heading has content», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/heading-has-content.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/heading-has-content выполняется.

```js
function examplePassingCorrectness() {
  // Требование «heading has content» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/heading-has-content сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «heading has content» нарушено.
  return false;
}
```
