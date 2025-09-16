# suspicious/no-namespace

Правило `no-namespace` из набора `suspicious` контролирует аспект «No Namespace». Оно помогает избегать проблем в коде, связанных с требованием «no namespace», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-namespace.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-namespace выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no namespace» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-namespace сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no namespace» нарушено.
  return false;
}
```
