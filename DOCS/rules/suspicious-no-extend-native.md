# suspicious/no-extend-native

Правило `no-extend-native` из набора `suspicious` контролирует аспект «No Extend Native». Оно помогает избегать проблем в коде, связанных с требованием «no extend native», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extend-native.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-extend-native выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no extend native» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-extend-native сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no extend native» нарушено.
  return false;
}
```
