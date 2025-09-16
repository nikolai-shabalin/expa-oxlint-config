# suspicious/block-scoped-var

Правило `block-scoped-var` из набора `suspicious` контролирует аспект «Block Scoped Var». Оно помогает избегать проблем в коде, связанных с требованием «block scoped var», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/block-scoped-var.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/block-scoped-var выполняется.

```js
function examplePassingSuspicious() {
  // Требование «block scoped var» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/block-scoped-var сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «block scoped var» нарушено.
  return false;
}
```
