# correctness/jsx-props-no-spread-multi

Правило `jsx-props-no-spread-multi` из набора `correctness` контролирует аспект «Jsx Props No Spread Multi». Оно помогает избегать проблем в коде, связанных с требованием «jsx props no spread multi», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/jsx-props-no-spread-multi.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило correctness/jsx-props-no-spread-multi выполняется.

```js
function examplePassingCorrectness() {
  // Требование «jsx props no spread multi» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило correctness/jsx-props-no-spread-multi сигнализирует о проблеме.

```js
function exampleFailingCorrectness() {
  // Требование «jsx props no spread multi» нарушено.
  return false;
}
```
