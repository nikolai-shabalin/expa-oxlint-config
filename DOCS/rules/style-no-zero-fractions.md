# style/no-zero-fractions

Правило `no-zero-fractions` из набора `style` контролирует аспект «No Zero Fractions». Оно помогает избегать проблем в коде, связанных с требованием «no zero fractions», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-zero-fractions.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило style/no-zero-fractions выполняется.

```js
function examplePassingStyle() {
  // Требование «no zero fractions» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило style/no-zero-fractions сигнализирует о проблеме.

```js
function exampleFailingStyle() {
  // Требование «no zero fractions» нарушено.
  return false;
}
```
