# correctness/html-has-lang

Правило `html-has-lang` из набора `correctness` контролирует аспект «Html Has Lang». Оно помогает избегать проблем в коде, связанных с требованием «html has lang», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/html-has-lang.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/html-has-lang выполняется.

```js
function examplePassingCorrectness() {
  // Требование «html has lang» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/html-has-lang сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «html has lang» нарушено.
  return false;
}
```
