# pedantic/prefer-native-coercion-functions

Правило `prefer-native-coercion-functions` из набора `pedantic` контролирует аспект «Prefer Native Coercion Functions». Оно помогает избегать проблем в коде, связанных с требованием «prefer native coercion functions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/prefer-native-coercion-functions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/prefer-native-coercion-functions выполняется.

```js
function examplePassingPedantic() {
  // Требование «prefer native coercion functions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/prefer-native-coercion-functions сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «prefer native coercion functions» нарушено.
  return false;
}
```
