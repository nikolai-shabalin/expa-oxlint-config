# suspicious/no-new

Правило `no-new` из набора `suspicious` контролирует аспект «No New». Оно помогает избегать проблем в коде, связанных с требованием «no new», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-new.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-new выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no new» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-new сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no new» нарушено.
  return false;
}
```
