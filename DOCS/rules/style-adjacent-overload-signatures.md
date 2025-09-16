# style/adjacent-overload-signatures

Правило `adjacent-overload-signatures` из набора `style` контролирует аспект «Adjacent Overload Signatures». Оно помогает избегать проблем в коде, связанных с требованием «adjacent overload signatures», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/adjacent-overload-signatures.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/adjacent-overload-signatures выполняется.

```js
function examplePassingStyle() {
  // Требование «adjacent overload signatures» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/adjacent-overload-signatures сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «adjacent overload signatures» нарушено.
  return false;
}
```
