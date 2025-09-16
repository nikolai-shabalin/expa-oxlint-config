# correctness/jsx-no-duplicate-props

Правило `jsx-no-duplicate-props` из набора `correctness` контролирует аспект «Jsx No Duplicate Props». Оно помогает избегать проблем в коде, связанных с требованием «jsx no duplicate props», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-no-duplicate-props.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/jsx-no-duplicate-props выполняется.

```js
function examplePassingCorrectness() {
  // Требование «jsx no duplicate props» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/jsx-no-duplicate-props сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «jsx no duplicate props» нарушено.
  return false;
}
```
