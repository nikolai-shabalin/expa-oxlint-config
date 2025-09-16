# suspicious/no-absolute-path

Правило `no-absolute-path` из набора `suspicious` контролирует аспект «No Absolute Path». Оно помогает избегать проблем в коде, связанных с требованием «no absolute path», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-absolute-path.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-absolute-path выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no absolute path» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-absolute-path сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no absolute path» нарушено.
  return false;
}
```
