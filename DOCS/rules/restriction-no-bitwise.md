# restriction/no-bitwise

Правило `no-bitwise` из набора `restriction` контролирует аспект «No Bitwise». Оно помогает избегать проблем в коде, связанных с требованием «no bitwise», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-bitwise.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило restriction/no-bitwise выполняется.

```js
function examplePassingRestriction() {
  // Требование «no bitwise» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило restriction/no-bitwise сигнализирует о проблеме.

```js
function exampleFailingRestriction() {
  // Требование «no bitwise» нарушено.
  return false;
}
```
