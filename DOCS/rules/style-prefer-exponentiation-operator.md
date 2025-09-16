# style/prefer-exponentiation-operator

Правило `prefer-exponentiation-operator` из набора `style` контролирует аспект «Prefer Exponentiation Operator». Оно помогает избегать проблем в коде, связанных с требованием «prefer exponentiation operator», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-exponentiation-operator.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/prefer-exponentiation-operator выполняется.

```js
function examplePassingStyle() {
  // Требование «prefer exponentiation operator» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/prefer-exponentiation-operator сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «prefer exponentiation operator» нарушено.
  return false;
}
```
