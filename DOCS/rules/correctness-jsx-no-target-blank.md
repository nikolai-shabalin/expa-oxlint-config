# correctness/jsx-no-target-blank

Правило `jsx-no-target-blank` из набора `correctness` контролирует аспект «Jsx No Target Blank». Оно помогает избегать проблем в коде, связанных с требованием «jsx no target blank», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-target-blank.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/jsx-no-target-blank выполняется.

```js
function examplePassingCorrectness() {
  // Требование «jsx no target blank» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/jsx-no-target-blank сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «jsx no target blank» нарушено.
  return false;
}
```
