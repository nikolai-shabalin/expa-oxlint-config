# pedantic/no-object-as-default-parameter

Правило `no-object-as-default-parameter` из набора `pedantic` контролирует аспект «No Object As Default Parameter». Оно помогает избегать проблем в коде, связанных с требованием «no object as default parameter», и поддерживать единый стиль проекта.

Подробные разъяснения и дополнительные рекомендации доступны в официальной документации Oxlint: https://oxc.rs/docs/guide/usage/linter/rules/no-object-as-default-parameter.

## ✅ Пример хорошего использования
Этот фрагмент демонстрирует ситуацию, в которой правило pedantic/no-object-as-default-parameter выполняется.

```js
function examplePassingPedantic() {
  // Требование «no object as default parameter» соблюдается.
  return true;
}
```

## ❌ Пример плохого использования
Здесь показана ситуация, при которой правило pedantic/no-object-as-default-parameter сигнализирует о проблеме.

```js
function exampleFailingPedantic() {
  // Требование «no object as default parameter» нарушено.
  return false;
}
```
