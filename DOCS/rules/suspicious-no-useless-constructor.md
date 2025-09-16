# suspicious/no-useless-constructor

Правило `no-useless-constructor` из набора `suspicious` контролирует аспект «No Useless Constructor». Оно помогает избегать проблем в коде, связанных с требованием «no useless constructor», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-useless-constructor.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило suspicious/no-useless-constructor выполняется.

```js
function examplePassingSuspicious() {
  // Требование «no useless constructor» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило suspicious/no-useless-constructor сигнализирует о проблеме.

```js
function exampleFailingSuspicious() {
  // Требование «no useless constructor» нарушено.
  return false;
}
```
