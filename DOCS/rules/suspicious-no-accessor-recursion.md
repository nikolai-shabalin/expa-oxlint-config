# suspicious/no-accessor-recursion

Правило `no-accessor-recursion` из набора `suspicious` контролирует аспект «No Accessor Recursion». Оно помогает избегать проблем в коде, связанных с требованием «no accessor recursion», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-accessor-recursion.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-accessor-recursion выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no accessor recursion» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-accessor-recursion сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no accessor recursion» нарушено.
  return false;
}
```
