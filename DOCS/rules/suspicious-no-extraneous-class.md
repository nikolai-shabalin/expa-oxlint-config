# suspicious/no-extraneous-class

Правило `no-extraneous-class` из набора `suspicious` контролирует аспект «No Extraneous Class». Оно помогает избегать проблем в коде, связанных с требованием «no extraneous class», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-extraneous-class.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-extraneous-class выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no extraneous class» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-extraneous-class сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no extraneous class» нарушено.
  return false;
}
```
