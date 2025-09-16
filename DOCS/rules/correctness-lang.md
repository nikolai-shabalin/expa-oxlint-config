# correctness/lang

Правило `lang` из набора `correctness` контролирует аспект «Lang». Оно помогает избегать проблем в коде, связанных с требованием «lang», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/lang.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/lang выполняется.

```js
function examplePassingCorrectness() {
  // Требование «lang» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/lang сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «lang» нарушено.
  return false;
}
```
