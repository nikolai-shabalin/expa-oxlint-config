# suspicious/no-useless-concat

Правило `no-useless-concat` из набора `suspicious` контролирует аспект «No Useless Concat». Оно помогает избегать проблем в коде, связанных с требованием «no useless concat», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-concat.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-useless-concat выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no useless concat» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-useless-concat сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no useless concat» нарушено.
  return false;
}
```
