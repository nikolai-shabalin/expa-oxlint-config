# style/prefer-reduce-type-parameter

Правило `prefer-reduce-type-parameter` из набора `style` контролирует аспект «Prefer Reduce Type Parameter». Оно помогает избегать проблем в коде, связанных с требованием «prefer reduce type parameter», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-reduce-type-parameter.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-reduce-type-parameter выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer reduce type parameter» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-reduce-type-parameter сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer reduce type parameter» нарушено.
  return false;
}
```
